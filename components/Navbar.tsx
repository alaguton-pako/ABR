"use client";
import React from "react";
import Image from "next/image";
import ArrowDownIcon from "./ui/ArrowDownIcon";
import SearchIcon from "./ui/SearchIcon";
import CustomIcon from "./ui/CustomIcon";
import PlayButton from "./ui/PlayButton";
import Link from "next/link";
import PodcastControl from "./PodCastControl";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import SearchBar from "./SearchBar";
import { PulsatingDot } from "./ui/PulsatingDot";

const Navbar = () => {
  const { currentEpisodeId } = useSelector((state: RootState) => state.player);
  const showPodcastControl = !!currentEpisodeId;

  return (
    <>
      <div className="px-8 py-4 h-16 w-full flex justify-between items-center bg-white">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <div>
              <Image src="/compLogo.png" height={120} width={120} alt="Logo" />
            </div>
          </Link>
        </div>
        {/* Navigation and Search Section */}
        <div className="flex items-center gap-16">
          {/* Navigation Links */}
          <ul className="flex items-center gap-10 text-xs font-bold ">
            <li>Home</li>
            <li className="flex items-center gap-1">
              Company
              <ArrowDownIcon height={16} width={16} color="#000" />
            </li>
            <li>Resources</li>
            <li>Contact Us</li>
            <li>Advertise</li>
          </ul>
          <SearchBar />
        </div>
      </div>
      {/* Top Section */}
      <div className="w-full h-16 pr-6 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center h-full">
          <div
            className="md:col-span-5 w-full relative bg-cover bg-center overflow-hidden h-16"
            style={{
              backgroundImage: "url('/bgImage1.png')",
            }}
          >
            {/* Faint black overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content centered vertically */}
            <div className="relative z-10 w-full h-full p-4 flex items-center">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                {showPodcastControl ? (
                  <PodcastControl />
                ) : (
                  <div className="flex items-center gap-4">
                    <PlayButton />
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-white">
                        Listen to ABR Live Radio
                      </p>
                      <div className="flex items-center gap-2">
                        <PulsatingDot className="h-1 w-2" />
                        <p className="text-xs text-[#9CCC65] font-semibold">
                          ON AIR
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 text-white hover:text-[#9CCC65] cursor-pointer transition-colors">
                  <CustomIcon src="/schedule.png" height={20} width={20} />
                  <p className="text-xs font-medium">View schedules</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-7 w-full">
            <div className="flex flex-wrap ml-[18rem] gap-8">
              <div className="flex items-center gap-6">
                <div className="h-5 w-[2px] bg-white"></div>
                {[
                  { icon: "/latestNews.png", text: "Latest News", link: "/" },
                  { icon: "/microphone.png", text: "New Episodes", link: "/" },
                  { icon: "/services.png", text: "Our Services", link: "/" },
                  {
                    icon: "/podcast.png",
                    text: "All Podcast",
                    link: "/categories",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 cursor-pointer hover:text-[#9CCC65] text-white transition-colors"
                  >
                    <CustomIcon src={item.icon} height={18} width={18} />
                    <Link href={item.link}>
                      <span className="text-xs font-medium">{item.text}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
