import React from "react";
import Image from "next/image";
import CustomIcon from "../ui/CustomIcon";
import PlayButton from "../ui/PlayButton";
import Link from "next/link";
import { useGetPodcastEpisodes } from "@/feature/podcast/api";
import { formatReadableDate } from "@/lib/helper";
import { useState } from "react";
import { PaginationControls } from "../ui/PaginationsControl";
import { RedLoader } from "../ui/Loader";

const Content = ({ id }: { id?: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const { data, isLoading } = useGetPodcastEpisodes(
    id ?? "",
    currentPage,
    perPage
  );

  const episodes = data?.data?.data;
  const paginationData = data?.data;
  if (isLoading) {
    return (
      <div className="h-screen">
        <RedLoader />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8 p-4 max-w-7xl mx-auto">
      {/* Main Content Column */}
      <div className="col-span-12 lg:col-span-8 xl:col-span-9">
        <div className="w-full lg:w-5/6">
          <h1 className="text-sm py-4 md:py-6">
            <span className="text-gray-500 font-semibold">ALL EPISODES </span>(
            {episodes?.length} AVAILABLE)
          </h1>

          {/* Episodes List */}
          <div className="space-y-4">
            {episodes?.map((episode) => (
              <Link
                key={episode.id}
                href={`/podcast/${id}/episode/${episode?.id}`}
                className="block"
              >
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 border-y border-[#DCDCDC] py-6 group hover:bg-gray-50 transition-colors duration-200">
                  {/* Image Container */}
                  <div className="flex-shrink-0 w-full sm:w-[120px] md:w-[150px] aspect-square relative">
                    <Image
                      src={episode?.picture_url || "/placeholder-episode.png"}
                      alt={`Episode: ${episode?.title}`}
                      fill
                      className="rounded-xs object-cover group-hover:brightness-75 transition-all duration-300"
                    />
                    {/* Hover Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PlayButton
                        height={32}
                        width={32}
                        className="text-red-500 bg-white/90 rounded-full p-2 shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Episode Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-2 md:gap-3">
                      <h1 className="text-xs md:text-sm text-gray-400 font-semibold">
                        {formatReadableDate(episode?.published_at)}
                      </h1>

                      <h2 className="text-base md:text-lg font-bold group-hover:text-red-500 group-hover:underline transition-colors duration-200">
                        {episode?.title}
                      </h2>

                      <p className="text-xs md:text-sm text-gray-600 line-clamp-2 md:line-clamp-3">
                        {episode?.description}
                      </p>

                      <div className="flex items-center gap-2 md:gap-4 mt-1 md:mt-2">
                        <PlayButton
                          height={16}
                          width={16}
                          className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] group-hover:scale-110 transition-transform"
                        />

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 md:gap-3">
                          <button className="h-7 w-7 md:h-8 md:w-8 rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition-colors">
                            <CustomIcon src="/vector2.png" alt="Share icon" />
                          </button>
                          <button className="h-7 w-7 md:h-9 md:w-9 rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition-colors">
                            <CustomIcon
                              src="/share.png"
                              alt="Share icon"
                              height={12}
                              width={12}
                            />
                          </button>
                          <button className="h-7 w-7 md:h-9 md:w-9 rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition-colors">
                            <CustomIcon
                              src="/gift.png"
                              alt="Gift icon"
                              height={12}
                              width={12}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {paginationData && (
            <div className="flex justify-start mt-6 md:mt-10">
              <PaginationControls
                currentPage={currentPage}
                totalPages={paginationData.last_page}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Ads - Hidden on mobile */}
      <div className="hidden lg:block col-span-4 xl:col-span-3">
        <div className="flex flex-col gap-4 sticky top-4">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/advert8.png"
              alt="Ad 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/advert2.png"
              alt="Ad 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
