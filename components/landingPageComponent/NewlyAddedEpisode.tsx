"use client";
import React from "react";
import CustomCardLayout from "../ui/CustomCardLayout";
import { CustomCard } from "../ui/CustomCard";
import { useGetLatestEpisodes } from "@/feature/episode/api";
import { formatReadableDate } from "@/lib/helper";
import { CardCarousel } from "../CardCarousel";
import { RedLoader } from "../ui/Loader";

const NewlyAddedEpisode = () => {
  const { data, isLoading } = useGetLatestEpisodes(5, 11);
  const episodes = data && data?.data?.data?.slice(5);
  <div className="h-screen">
    <RedLoader />
  </div>;
  return (
    <>
      <CustomCardLayout>
        <div className="mt-20 mb-4 flex flex-col gap-1">
          <h1 className="text-[#282828] text-xl font-bold">
            Newly added episodes
          </h1>
        </div>
        <section>
          <CardCarousel
            items={episodes ?? []}
            renderCard={({
              id,
              picture_url,
              published_at,
              title,
              description,
              duration,
              podcast_id,
              ...rest
            }) => (
              <CustomCard
                key={id}
                episodeId={id}
                imageSrc={picture_url}
                date={formatReadableDate(published_at)}
                title={title}
                description={description}
                duration={duration}
                podcastId={podcast_id}
                {...rest}
              />
            )}
          />
        </section>
      </CustomCardLayout>
    </>
  );
};

export default NewlyAddedEpisode;
