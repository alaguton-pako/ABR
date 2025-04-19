"use client";
import React from "react";
import Image from "next/image";
import CustomIcon from "./CustomIcon";

type CustomCardProps = {
  image: string;
  date: string;
  time: string;
  title: string;
  description: string;
  showActions?: boolean;
  className?: string;
};

export const CustomCard: React.FC<CustomCardProps> = ({
  image,
  date,
  time,
  title,
  description,
  showActions = true,
  className = "",
}) => {
  return (
    <div className={`w-[247px] h-[400px] rounded-md overflow-hidden bg-card text-card-foreground ${className}`}>
      {/* Top Image */}
      <div className="h-1/2 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>
      {/* Bottom Info */}
      <div className="h-1/2 flex flex-col gap-4 mt-2 p-4">
        {/* Date & Time */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>{date}</p>
          <p>{time}</p>
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold">{title}</h2>

        {/* Description & Icons */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{description}</p>
          {showActions && (
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full flex justify-center items-center bg-muted">
                <CustomIcon src="/share.png" alt="Share icon" />
              </div>
              <div className="h-9 w-9 rounded-full flex justify-center items-center bg-muted">
                <CustomIcon src="/gift.png" alt="Gift icon" height={14} width={14} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
