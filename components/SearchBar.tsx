"use client";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "./ui/SearchIcon";
import { useGetSearchPodcasts } from "@/feature/podcast/api";
import { Podcast } from "@/feature/episode/types";
import Link from "next/link";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useGetSearchPodcasts(query);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setQuery(input.trim());
      setShowDropdown(true);
    }
  };

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center bg-gray-400 rounded-full pl-4 pr-2 py-2"
    >
      <SearchIcon height={20} width={20} color="#fff" />
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent outline-none ml-2 placeholder-white text-sm text-white"
      />

      {/* Dropdown results */}
      {query && showDropdown && (
        <div className="absolute top-full right-1 mt-2 bg-white rounded shadow-lg w-64 max-h-60 overflow-y-auto z-50">
          {isLoading ? (
            <p className="p-4 text-sm">Searching...</p>
          ) : isError ? (
            <p className="p-4 text-sm text-red-500">Error loading results</p>
          ) : data?.data?.data?.length ? (
            data.data.data.map((podcast: Podcast) => (
              <Link href={`/podcast/${podcast.id}`} key={podcast.id}>
                <div className="p-3 hover:bg-gray-100 text-sm border-b cursor-pointer">
                  {podcast.title}
                </div>
              </Link>
            ))
          ) : (
            <p className="p-4 text-sm">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
