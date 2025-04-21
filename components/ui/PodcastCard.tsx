// components/PodcastCard.tsx
import Image from "next/image";
import PlayButton from "./PlayButton";
import { Separator } from "./separator";
import { formatReadableDate } from "@/lib/helper";
import { formatDurationToMinutes } from "@/lib/helper";
import Link from "next/link";

export interface PodcastCardProps {
  imageSrc: string;
  title: string;
  date: string;
  duration: number;
  podcastId?: number;
  episodeId?: number;
  className?: string;
  description?: string;
}

const PodcastCard = ({
  imageSrc,
  title,
  date,
  duration,
  podcastId,
  episodeId
}: PodcastCardProps) => {
  return (
    <div className="relative text-white shadow-md rounded-sm flex flex-col h-[300px] md:h-[400px]">
      {/* Image wrapper */}
      <div className="relative h-4/6">
        <Image src={imageSrc || '/advert6.png'} alt={title} fill className="object-cover" />
      </div>

      {/* Text content */}
      <div className="bg-white text-[#000] h-2/6 py-4 px-6">
        <div className="h-full flex flex-col justify-between items-center p-1">
          <h1 className="text-center text-xs xl:text-sm line-clamp-3">{title}</h1>
          <div className="flex items-center gap-4 ">
            <p className="text-xs xl:text-sm">{formatReadableDate(date)}</p>
            <Separator orientation="vertical" />
            <p className="text-xs xl:text-sm">{formatDurationToMinutes(duration)}</p>
          </div>
        </div>
      </div>

      {/* Play button */}
      <div className="absolute left-1 top-5/7 -translate-y-1/2 -translate-x-1/2">
        <Link href={`/podcast/${podcastId}/episode/${episodeId}`}>
          <PlayButton />
        </Link>
      </div>
    </div>
  );
};

export default PodcastCard;
