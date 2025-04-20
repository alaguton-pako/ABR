"use client";
import React from "react";
import Image from "next/image";
import CustomIcon from "@/components/ui/CustomIcon";
import Content from "@/components/podcastPageComponent/Content";
import { useParams } from "next/navigation";
import { useGetPodcastById } from "@/feature/podcast/api";

const page = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPodcastById(id as string);
  const podcastContent = data && data?.data;
  if (isLoading) {
    return <div className="flex items-center justify-center">Loading.....</div>;
  }
  return (
    <>
      <div className="h-[500px] w-full bg-gradient-to-br from-[#2B3221] to-[#817e7e] p-14">
        {/* Main container */}
        <div className="flex justify-between h-[400px]">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <div className="relative w-full h-full">
              <Image
                src={
                  podcastContent?.cover_picture_url ||
                  podcastContent?.picture_url ||
                  "/advert6.png"
                }
                alt="Podcast Image"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
            <div className="w-full flex gap-4">
              <div className="flex flex-col gap-6 p-6">
                <h1 className="text-lg text-gray-400 font-semibold">Podcast</h1>
                <h2 className="text-lg md:text-2xl text-white font-bold">
                  {podcastContent?.title}
                </h2>

                <p className="text-sm w-4/5 md:text-base text-white">
                  {podcastContent?.description}
                </p>

                <div className="flex flex-col gap-2">
                  <h3 className="text-sm text-gray-400 font-semibold">
                    Available on
                  </h3>
                  <div className="w-full flex items-center gap-4 mt-2">
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
              <div className="h-full flex flex-col justify-start">
                <CustomIcon
                  src="/vector.png"
                  alt="share icon"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content id={String(id)} />
    </>
  );
};

export default page;
