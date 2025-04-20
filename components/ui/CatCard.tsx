import React from "react";
import Image from "next/image";
import CustomIcon from "./CustomIcon";
import { Dot } from "lucide-react";
import PlayButton from "@/components/ui/PlayButton";
import { formatDurationToMinutes, formatReadableDate } from "@/lib/helper";
import Link from "next/link";

type CustomCardProps = {
  image: string;
  date: string;
  time: number;
  title: string;
  description: string;
  className?: string;
  podcastId: number;
  episodeId: number;
};

export const CatCard: React.FC<CustomCardProps> = ({
  image,
  date,
  time,
  title,
  description,
  className = "",
  podcastId,
  episodeId,
}) => {
  return (
    <Link href={`/podcast/${podcastId}/episode/${episodeId}`}>
      <div
        className={`w-[247px] h-[500px] rounded-xs overflow-hidden ${className}`}
      >
        {/* Top Image */}
        <div className="h-3/6 relative">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xs"
          />
        </div>
        {/* Bottom Info */}
        <div className="h-2/6 flex flex-col gap-1 p-4">
          {/* Title */}
          <h1 className="font-semibold">
            {title?.length > 35 ? `${title.slice(0, 35)}...` : title}
          </h1>
          {/* de4scription */}
          <p className="text-sm text-muted-foreground line-clamp-1">
            {description}
          </p>
          {/* Date & Time */}
          <div className="flex items-center text-[#828282] justify-between text-sm">
            <p>{formatReadableDate(date)}</p>
            <div className="text-sm flex items-center">
              <Dot size={40} />
              {formatDurationToMinutes(time)}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <PlayButton className="w-8 h-8" height={14} width={14} />

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
  );
};
