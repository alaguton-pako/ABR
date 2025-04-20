"use client";
import React from "react";
import Sections from "../ui/Sections";
import CustomCardLayout from "../ui/CustomCardLayout";
import { useGetTrendingPodcast } from "@/feature/podcast/api";
import { Podcast } from "@/feature/episode/types";
import { RedLoader } from "../ui/Loader";


const EntertainmentLifestyle = () => {
  const { data, isLoading } = useGetTrendingPodcast();
  const podcasts = data?.data?.data?.slice(6, 10);
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
      <section>
        <Sections
          sectionTitle="Entertainment & Lifestlye"
          cardData={cardData}
        />
      </section>
    </CustomCardLayout>
  );
};

export default EntertainmentLifestyle;
