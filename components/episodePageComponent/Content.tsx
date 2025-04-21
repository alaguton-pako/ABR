import React from "react";
import CustomCardLayout from "../ui/CustomCardLayout";
import { Separator } from "@/components/ui/separator";
import PodcastCard from "../ui/PodcastCard";
import { useGetPodcastEpisodes } from "@/feature/podcast/api";

const Content = ({ id }: { id?: string }) => {
  const { data, isLoading } = useGetPodcastEpisodes(id ?? 0);
  const episodes = data && data?.data?.data;
  if (isLoading) {
    return <div className="flex items-center justify-center">Loading.....</div>;
  }
  return (
    <>
      <CustomCardLayout>
        <div className="p-2">
          <div className="">
            <h1 className="font-bold text-base text-[#5A5A5A]">
              NEXT EPISODES IN QUEUE
            </h1>
          </div>
          <div>
            <Separator className="my-9"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {episodes?.map((ep) => (
              <PodcastCard
                key={ep?.id}
                imageSrc={ep?.picture_url}
                title={ep?.title}
                date={ep?.published_at}
                duration={ep?.duration}
                podcastId={ep?.podcast_id}
                episodeId={ep?.id}
              />
            ))}
          </div>
        </div>
      </CustomCardLayout>
    </>
  );
};

export default Content;
