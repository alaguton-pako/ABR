"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Dot } from "lucide-react";
import PlayComponent from "@/components/ui/PlayComponent";
import Content from "@/components/episodePageComponent/Content";
import NewsLetter from "@/components/landingPageComponent/NewsLetter";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetEpisodeById } from "@/feature/episode/api";
import { formatDurationToMinutes, formatReadableDate } from "@/lib/helper";
import { RedLoader } from "@/components/ui/Loader";
import { useState } from "react";
import { cn } from "@/lib/utils";

const page = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id, episodeId } = useParams();
  const parsedEpisodeId = episodeId ? parseInt(episodeId as string, 10) : null;
  const { data, isLoading } = useGetEpisodeById(parsedEpisodeId ?? 0);
  const episodeContent = data && data?.data;
  const podcastId = id;
  if (isLoading) {
    return (
      <div className="h-screen">
        <RedLoader />
      </div>
    );
  }
  return (
    <div>
      <div className="relative w-full min-h-[100vh] pt-[150px] p-4 md:p-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={episodeContent?.picture_url ?? "/advert6.png"}
            alt="Background"
            fill
            className="object-cover"
            quality={80}
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B3221]/95 to-[#817e7e]/80 -z-10" />

        {/* Back Button */}
        <div className="container mx-auto">
          <Link href={`/podcast/${podcastId}`}>
            <div className="flex items-center text-white mb-4 md:mb-6 cursor-pointer">
              <ChevronLeft />
              <span className="font-medium">Back to podcast</span>
            </div>
          </Link>
        </div>

        {/* Content Container */}
        <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-8 p-4">
          {/* Image Container - Responsive sizing */}
          <div className="flex-shrink-0 relative w-full max-w-[200px] h-[150px] md:w-[150px] md:h-[150px] mx-auto md:mx-0">
            <Image
              src={episodeContent?.picture_url || "/advert6.png"}
              alt="Podcast Image"
              fill
              className="rounded-xs object-cover"
            />
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)] md:max-h-[calc(100vh-180px)] pr-2">
            <div className="flex flex-col text-sm gap-4">
              {/* Date and Duration */}
              <div className="flex items-center flex-wrap gap-2">
                <h1 className="text-gray-300 font-semibold">
                  {formatReadableDate(episodeContent?.published_at ?? "")}
                </h1>
                <div className="text-sm flex items-center text-gray-300">
                  <Dot size={40} />
                  {formatDurationToMinutes(episodeContent?.duration ?? 0)}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
                {episodeContent?.title}
              </h2>

              {/* Description with Read More */}
              <div className="flex flex-col gap-2 group">
                <p
                  className={cn(
                    "text-sm text-gray-200 leading-relaxed transition-all duration-200",
                    isExpanded ? "line-clamp-none" : "line-clamp-5"
                  )}
                >
                  {episodeContent?.description}
                </p>

                {episodeContent &&
                  episodeContent?.description?.length > 200 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-[#BCFFB6] font-medium hover:underline flex items-center gap-1 w-fit"
                    >
                      {isExpanded ? "READ LESS" : "READ MORE"}
                    </button>
                  )}
              </div>
            </div>

            {/* Player Component - Positioned properly */}
            <div className="mt-8 md:mt-12">
              {episodeContent?.content_url && (
                <PlayComponent
                  contentUrl={episodeContent.content_url}
                  podcastId={episodeContent?.podcast_id}
                  episodeId={episodeContent?.id}
                  podcastTitle={episodeContent?.title}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 mb-32">
        <Content id={String(podcastId)} />
      </div>
      <NewsLetter />
    </div>
  );
};

export default page;
