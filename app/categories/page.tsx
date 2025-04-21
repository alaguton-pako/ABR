"use client";
import { CatCard } from "@/components/ui/CatCard";
import CustomCardLayout from "@/components/ui/CustomCardLayout";
import { Separator } from "@/components/ui/separator";
import { Ellipsis } from "lucide-react";
import { PaginationControls } from "@/components/ui/PaginationsControl";
import ExploreOtherCat from "@/components/ExploreOtherCat";
import { useGetLatestEpisodes } from "@/feature/episode/api";
import { useState } from "react";
import { RedLoader } from "@/components/ui/Loader";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 20;
  const { data, isLoading } = useGetLatestEpisodes(currentPage, perPage);
  const episodes = data && data?.data?.data;
  const paginationData = data?.data;

  if (isLoading) {
    return (
      <div className="h-screen">
        <RedLoader />
      </div>
    );
  }
  const cardData2 = [
    {
      id: 1,
      image: "/catOne.png",
      date: "Apr 17, 2022",
      time: "10:45 AM",
      title: "News & Storytelling",
      description: "More Episodes",
    },
    {
      id: 2,
      image: "/catEntertainment.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "Entertainment & Lifestyle",
      description: "More Episodes",
    },
    {
      id: 3,
      image: "/catTsb.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "Tech,Sport & Business",
      description: "More Episodes",
    },
    {
      id: 4,
      image: "/catOthers.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "Other podcasts",
      description: "More Episodes",
    },
  ];
  return (
    <>
      <CustomCardLayout>
        <div className="pt-[120px] md:pt-0 p-4">
          <div className="mt-4">
            <h1 className="text-lg text-[#5A5A5A] font-bold">ALL PODCASTS</h1>
          </div>
          <div>
            <Separator className="my-8" />
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm my-3">
            <div className="flex items-center gap-2">
              <span>
                Sort by : <span className="font-medium">Popular</span>
              </span>
              <Ellipsis fontWeight={600} />
            </div>
            <div className="h-[18px] bg-gray-400 w-[2px]"></div>
            <div>
              <div className="flex items-center gap-2">
                <span>
                  Sort by category : <span>All</span>
                </span>
                <Ellipsis fontWeight={600} />
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {episodes?.map((item) => (
              <CatCard
                key={item?.id}
                title={item?.title}
                image={item?.picture_url}
                date={item?.published_at}
                description={item?.description}
                time={item?.duration}
                podcastId={item?.podcast_id}
                episodeId={item?.id}
              />
            ))}
          </div>
          {/* Pagination */}
          <div className="mb-4">
            <PaginationControls
              currentPage={currentPage}
              totalPages={paginationData?.last_page || 1}
              onPageChange={setCurrentPage}
            />
          </div>
          <div>
            <Separator className="my-8" />
          </div>
          <div className="mt-10 mb-15 flex flex-col gap-4">
            <h1 className="text-lg text-[#5A5A5A] font-bold">
              Explore Other Categories
            </h1>
            <div className="flex flex-wrap gap-8 justify-center">
              {cardData2.map((category) => (
                <ExploreOtherCat {...category} key={category.id} />
              ))}
            </div>
          </div>
        </div>
      </CustomCardLayout>
    </>
  );
};

export default page;
