"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetTrendingPodcast } from "@/feature/podcast/api";
import { Podcast } from "@/feature/episode/types";
import { CardCarousel } from "../CardCarousel";
import PlayButton from "./PlayButton";
import { RedLoader } from "./Loader";

const CardComponent = ({ card }: { card: Podcast }) => {
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <Link href={`/podcast/${card.id}`}>
      <div
        className="relative w-full h-[400px] rounded-xs overflow-hidden shadow-lg cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0">
          <Image
            src={card?.picture_url}
            alt={card?.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        {/* the animation section */}
        <div
          className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4 transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h2 className="text-xl drop-shadow-xl font-semibold truncate">
            {card?.title}
          </h2>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent text-white transition-all duration-500 overflow-hidden"
          style={{
            height: isHovered
              ? `${contentRef.current?.scrollHeight || 0}px`
              : "0px",
          }}
        >
          {/* PlayButton aligned to the right */}
          <div className="w-full flex justify-end pr-4 pt-3">
            <PlayButton />
          </div>

          {/* Text content (unchanged) */}
          <div ref={contentRef} className="p-4">
            <h2 className="text-xl font-bold mb-2 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              {card?.title}
            </h2>
            <div className="text-sm text-gray-200 line-clamp-15">
              {card?.description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CustomCardAnimation = () => {
  const { data, isLoading } = useGetTrendingPodcast();
  const cardData = data?.data?.data?.slice(3);
  if (isLoading) {
    return (
      <div className="h-screen">
        <RedLoader />
      </div>
    );
  }
  return (
    <CardCarousel
      items={cardData ?? []}
      renderCard={(card) => <CardComponent card={card} />}
    />
  );
};

export default CustomCardAnimation;
