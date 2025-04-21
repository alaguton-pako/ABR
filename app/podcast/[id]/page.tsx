"use client";
import React from "react";
import Image from "next/image";
import CustomIcon from "@/components/ui/CustomIcon";
import Content from "@/components/podcastPageComponent/Content";
import { useParams } from "next/navigation";
import { useGetPodcastById } from "@/feature/podcast/api";
import { RedLoader } from "@/components/ui/Loader";
import CustomCardLayout from "@/components/ui/CustomCardLayout";

const page = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPodcastById(id as string);
  const podcastContent = data && data?.data;
  if (isLoading) {
    return (
      <div className="h-screen">
        <RedLoader />
      </div>
    );
  }
  return (
    <>
      <div className="min-h-[400px] pt-[180px] w-full bg-gradient-to-br from-[#2B3221] to-[#817e7e] p-6 md:p-14">
        {/* Main container */}
        <div className="flex flex-col md:flex-row gap-6 h-full max-w-7xl mx-auto">
          {/* Left Section - Image */}
          <div className="relative aspect-square w-full max-w-[300px] md:w-[300px] md:h-[300px] flex-shrink-0">
            <Image
              src={
                podcastContent?.cover_picture_url ||
                podcastContent?.picture_url ||
                "/advert6.png"
              }
              alt="Podcast Image"
              fill
              className="rounded-sm object-cover"
            />
          </div>

          {/* Right Section - Content */}
          <div className="flex flex-1 flex-col md:flex-row gap-4 h-full">
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-lg text-gray-400 font-semibold">Podcast</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
                  {podcastContent?.title}
                </h2>
                <p className="text-sm md:text-base text-white h-[70%] overflow-auto">
                  {podcastContent?.description}
                </p>
              </div>

              <div className="mt-4 md:mt-6">
                <h3 className="text-sm text-gray-400 font-semibold">
                  Available on
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <CustomIcon
                    src="/spotify.png"
                    alt="icon"
                    height={26}
                    width={26}
                  />
                  <CustomIcon
                    src="/radioAir.png"
                    alt="icon"
                    height={26}
                    width={26}
                  />
                  <CustomIcon
                    src="/slack.png"
                    alt="icon"
                    height={30}
                    width={30}
                  />
                  <CustomIcon
                    src="/wokpa.png"
                    alt="icon"
                    height={30}
                    width={50}
                  />
                </div>
              </div>
            </div>

            {/* Share Icon - Aligned to top */}
            <div className="flex md:items-start justify-end md:justify-normal">
              <CustomIcon
                src="/vector.png"
                alt="share icon"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
      <CustomCardLayout>
        <Content id={String(id)} />
      </CustomCardLayout>
    </>
  );
};

export default page;
