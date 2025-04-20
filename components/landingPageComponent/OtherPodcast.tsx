"use client";
import React from "react";
import CustomCardLayout from "../ui/CustomCardLayout";
import Sections from "../ui/Sections";
import { useGetTopCategories } from "@/feature/category/api";
import { PodcastCategory } from "@/feature/category/types";
import { title } from "process";

const OtherPodcast = () => {
  const { data, isLoading } = useGetTopCategories();
  const podcasts = data?.data?.slice(1, 5);
  const cardData =
    podcasts?.map((ep: PodcastCategory) => ({
      title: ep?.name,
      picture_url: ep?.image_url,
    })) || [];

  if (isLoading) {
    return <div className="flex justify-center items-center">loading....</div>;
  }
  return (
    <CustomCardLayout>
      <section>
        <Sections sectionTitle="Other Podcast" cardData={cardData} />
      </section>
    </CustomCardLayout>
  );
};

export default OtherPodcast;
