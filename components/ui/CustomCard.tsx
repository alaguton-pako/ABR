"use client";
import React from "react";
import Image from "next/image";
import CustomIcon from "./CustomIcon";
import { PodcastCardProps } from "./PodcastCard";
import { formatDurationToMinutes } from "@/lib/helper";
import { DotIcon } from "lucide-react";
import Link from "next/link";

export const CustomCard: React.FC<PodcastCardProps> = ({
  imageSrc,
  title,
  date,
  duration,
  podcastId,
  episodeId,
  className = "",
}) => {
  return (
    <>
      <Link href={`/podcast/${podcastId}/episode/${episodeId}`}>
        <div
          className={`w-[247px] h-[400px] rounded-md overflow-hidden bg-card text-card-foreground ${className}`}
        >
          {/* Top Image */}
          <div className="h-1/2 relative">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
          {/* Bottom Info */}
          <div className="h-1/2 flex flex-col gap-2 mt-2 p-4">
            {/* Date & Time */}
            <div className="flex items-center justify-between text-sm font-semibold text-muted-foreground">
              <p className="">{date}</p>
              <div className="flex items-center gap-1">
                <DotIcon fontSize={"large"} />
                <p>{formatDurationToMinutes(duration)}</p>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-base font-semibold">
              {title?.length > 35 ? `${title.slice(0, 35)}...` : title}
            </h2>

            {/* Description & Icons */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">More Episodes</p>
              <div className="flex items-center gap-3">
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
      </Link>
    </>
  );
};
