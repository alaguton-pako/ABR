"use client";
import React from "react";
import CustomCardLayout from "../ui/CustomCardLayout";
import Sections from "../ui/Sections";
import { useGetTrendingPodcast } from "@/feature/podcast/api";
import { Podcast } from "@/feature/episode/types";
const TechSportBusiness = () => {
  const { data, isLoading } = useGetTrendingPodcast();
  const podcasts = data?.data?.data?.slice(1, 5);
  const cardData =
    podcasts?.map((ep: Podcast) => ({
      id: ep?.id,
      title: ep?.title,
      picture_url: ep?.picture_url,
    })) || [];

  if (isLoading) {
    return <div className="flex justify-center items-center">loading....</div>;
  }
  return (
    <CustomCardLayout>
      <section>
        <Sections sectionTitle="Tech, Sport & Business" cardData={cardData} />
      </section>
    </CustomCardLayout>
  );
};

export default TechSportBusiness;
