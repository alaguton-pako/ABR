"use client";
import React from "react";
import CustomCardLayout from "../ui/CustomCardLayout";
import Sections from "../ui/Sections";
import { useGetTrendingPodcast } from "@/feature/podcast/api";
import { Podcast } from "@/feature/episode/types";
import { RedLoader } from "../ui/Loader";

const CategoryListening = () => {
  const { data, isLoading } = useGetTrendingPodcast();
  const podcasts = data?.data?.data?.slice(10, 14);
  const cardData =
    podcasts?.map((ep: Podcast) => ({
      id: ep?.id,
      title: ep?.title,
      picture_url: ep?.picture_url,
    })) || [];

  if (isLoading) {
    return (
      <div className="h-screen">
        <RedLoader />
      </div>
    );
  }
  return (
    <CustomCardLayout>
      <div className="mt-20 mb-4">
        <div className="p-4 bg-[#F0E4FF]">
          <h1 className="text-[#282828] text-xl font-bold">
            LISTEN BY ABR CATEGORIES
          </h1>
        </div>
      </div>
      <section>
        {/* news and storytelling */}
        <Sections sectionTitle="News & Storytelling" cardData={cardData} />
      </section>
    </CustomCardLayout>
  );
};

export default CategoryListening;
