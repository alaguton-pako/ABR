"use client";
import React from "react";
import Image from "next/image";
import CustomIcon from "./CustomIcon";
import { Dot } from "lucide-react";
import PlayButton from "@/components/ui/PlayButton";

type CustomCardProps = {
  image: string;
  date: string;
  time: string;
  title: string;
  description: string;
  className?: string;
};

export const CatCard: React.FC<CustomCardProps> = ({
  image,
  date,
  time,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`w-[247px] h-[450px] rounded-xs overflow-hidden ${className}`}
    >
      {/* Top Image */}
      <div className="h-3/5 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xs"
        />
      </div>
      {/* Bottom Info */}
      <div className="h-2/5 flex flex-col gap-1 p-4">
        {/* Title */}
        <h2 className="text-base font-semibold">{title}</h2>
        {/* de4scription */}
        <p className="text-sm text-muted-foreground">{description}</p>
        {/* Date & Time */}
        <div className="flex items-center text-gray-300 justify-between text-sm">
          <p>{date}</p>
          <div className="text-sm flex items-center">
            <Dot size={40} />
            28 MIN
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PlayButton height={10} width={10} className="p-0 ml-0" />

            <div className="h-8 w-8 rounded-full flex justify-center items-center bg-muted">
              <CustomIcon src="/share.png" alt="Share icon" />
            </div>
            <div className="h-9 w-9 rounded-full flex justify-center items-center bg-muted">
              <CustomIcon
                src="/gift.png"
                alt="Gift icon"
                height={14}
                width={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
