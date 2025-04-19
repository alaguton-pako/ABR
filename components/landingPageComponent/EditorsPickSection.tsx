"use client";
import React from "react";
import { useGetTopPodcasts } from "@/feature/podcast/api";
import Image from "next/image";
import PlayButton from "../ui/PlayButton";
import PodcastCard from "../ui/PodcastCard";

const EditorsPickSection = () => {
  // const { data, isLoading, error } = useGetTopPodcasts();
  // if (isLoading) return <div>Loading...</div>;
  // // Access the actual podcasts data and pagination
  // const podcasts = data?.data?.data;
  // const randomPodcasts = podcasts?.sort(() => Math.random() - 0.5).slice(0, 3);

  const episodes = [
    {
      imageSrc: "/advert6.png",
      title: "The Funeral Experience: The Good, the Bad, and the Ugly",
      date: "Sept 2, 2023 | 28 mins",
    },
    {
      imageSrc: "/advert6.png",
      title: "Widowhood: Strength in Silence",
      date: "Sept 9, 2023 | 32 mins",
    },
  ];

  return (
    <>
      <div className="bg-[#F6F6F6]">
        <div className="w-[90%] mx-auto flex flex-col gap-6 p-4">
          {/* Header Section */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[#282828] text-xl font-bold">EDITOR'S PICKS</h1>
            <h3 className="text-[#CC0001] text-xs font-semibold border-l-4 pl-1 border-[#5A5A5A]">
              Featured Episodes
            </h3>
          </div>
          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            {/* Left Large Card with Background Image */}
            <div className="relative h-[300px] md:h-[500px] bg-gray-500 rounded-t-sm overflow-hidden">
              <Image
                src="/advert6.png"
                alt="Featured Podcast"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black/60 text-white flex items-center px-4 rounded-b-md">
                <div className="flex items-center gap-2">
                  <PlayButton />
                  <h2 className="text-base md:text-lg font-semibold truncate">
                    Podcast Title Goes Here
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Side Grid */}
            <div className="">
              {/* Top Two Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 mb-5">
                {/* first part */}
                {episodes.map((ep, index) => (
                  <PodcastCard
                    key={index}
                    imageSrc={ep.imageSrc}
                    title={ep.title}
                    date={ep.date}
                  />
                ))}
              </div>
              {/* Bottom Full Width Card */}
              <div
                className="h-[80px] bg-cover bg-center "
                style={{
                  backgroundImage: "url('/advert7.png')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorsPickSection;
