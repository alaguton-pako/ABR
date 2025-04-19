"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CardComponent = ({ card }: { card: Card }) => {
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Link href={'/podcast/1'}>
      <div
        className="relative w-full h-[400px] rounded-md overflow-hidden shadow-lg cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="absolute inset-0">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Persistent Title */}
        <div
          className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4 transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h2 className="text-xl drop-shadow-xl font-semibold truncate">{card.title}</h2>
        </div>

        {/* Expandable Content */}
        <div
          className="absolute bottom-0 left-0 w-full bg-gray-900/90 text-white transition-all duration-500 overflow-hidden"
          style={{
            height: isHovered
              ? `${contentRef.current?.scrollHeight || 0}px`
              : "0px",
          }}
        >
          <div ref={contentRef} className="p-4">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <div className="text-sm text-gray-300">{card.description}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CustomCardAnimation = () => {
  const cardData: Card[] = [
    {
      id: 1,
      title: "Card Title 1",
      description: "Description for card 1.",
      image: "/advert2.png",
    },
    {
      id: 2,
      title: "Card Title 2",
      description: "Description for card 2.",
      image: "/advert3.png",
    },
    {
      id: 3,
      title: "Card Title 3",
      description: "Description for card 3.",
      image: "/advert4.png",
    },
    {
      id: 4,
      title: "Card Title 4",
      description: "Description for card 4.",
      image: "/advert6.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardData.map((card) => (
        <CardComponent key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CustomCardAnimation;
