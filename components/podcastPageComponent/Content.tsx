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
  console.log(data);
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
    <div className="p-8">
      <div className="p-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Column */}
          <div className="col-span-12 md:col-span-10">
            <div className="w-full md:w-10/12">
              <h1 className="text-sm pb-6">
                <span className="text-gray-500 font-semibold">
                  ALL EPISODES{" "}
                </span>
                ({episodes?.length} AVAILABLE)
              </h1>

              {/* Episodes List */}
              <div className="">
                {episodes?.map((episode) => (
                  <Link
                    key={episode.id}
                    href={`/podcast/${id}/episode/${episode?.id}`}
                  >
                    <div
                      key={episode.id}
                      className="flex flex-col md:flex-row gap-6 border-y border-[#DCDCDC] py-8 group hover:bg-gray-50 transition-colors duration-200"
                    >
                      {/* Image Container with Hover Overlay */}
                      <div className="flex-shrink-0 w-full md:w-[150px] h-[150px] relative">
                        <Image
                          src={episode?.picture_url}
                          alt={`Episode: ${episode?.title}`}
                          fill
                          className="rounded-xs object-cover group-hover:brightness-75 transition-all duration-300"
                        />
                        {/* Hover Overlay Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <PlayButton
                            height={40}
                            width={40}
                            className="text-red-500 bg-white/90 rounded-full p-2 shadow-lg"
                          />
                        </div>
                      </div>

                      {/* Episode Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-3">
                          <h1 className="text-sm text-gray-400 font-semibold">
                            {formatReadableDate(episode?.published_at)}
                          </h1>

                          {/* Title with Hover Effects */}
                          <h2 className="text-lg font-bold group-hover:text-red-500 group-hover:underline transition-colors duration-200">
                            {episode?.title}
                          </h2>

                          <p className="text-sm text-gray-600 line-clamp-3">
                            {episode?.description}
                          </p>

                          <div className="w-full flex items-center gap-4 mt-2">
                            {/* Play Button with Hover Scale */}
                            <PlayButton
                              height={18}
                              width={18}
                              className="w-[30px] h-[30px] group-hover:scale-110 transition-transform"
                            />

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3">
                              <button className="h-8 w-8 rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition-colors">
                                <CustomIcon
                                  src="/vector2.png"
                                  alt="Share icon"
                                />
                              </button>
                              <button className="h-9 w-9 rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition-colors">
                                <CustomIcon
                                  src="/share.png"
                                  alt="Share icon"
                                  height={14}
                                  width={14}
                                />
                              </button>
                              <button className="h-9 w-9 rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition-colors">
                                <CustomIcon
                                  src="/gift.png"
                                  alt="Gift icon"
                                  height={14}
                                  width={14}
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
              <div className="flex justify-self-start mt-10">
                {/* Pagination Controls */}
                {paginationData && (
                  <div className="flex justify-start mt-10">
                    <PaginationControls
                      currentPage={currentPage}
                      totalPages={paginationData.last_page}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Sidebar Ads */}
          <div className="col-span-12 md:col-span-2">
            <div className="flex flex-col gap-4 sticky top-4">
              <div className="overflow-hidden">
                <Image
                  src="/advert8.png"
                  alt="Ad 1"
                  width={300}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/advert2.png"
                  alt="Ad 2"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
