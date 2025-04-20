import React from "react";
import Image from "next/image";
import CustomIcon from "../ui/CustomIcon";
import PlayButton from "../ui/PlayButton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { useGetPodcastEpisodes } from "@/feature/podcast/api";
import { formatReadableDate } from "@/lib/helper";

const Content = ({ id }: { id?: string }) => {
  const currentPage = 1;
  const { data, isLoading } = useGetPodcastEpisodes(id ?? 0, currentPage, 10);
  const episodes = data && data?.data?.data;
  if (isLoading) {
    return <div className="flex items-center justify-center">Loading.....</div>;
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
                      className="flex flex-col md:flex-row gap-6 border-y border-[#DCDCDC] py-8"
                    >
                      {/* Fixed Size Image Container */}
                      <div className="flex-shrink-0 w-full md:w-[150px] h-[150px] relative">
                        <Image
                          src={episode?.picture_url}
                          alt={`Episode: ${episode?.title}`}
                          fill
                          className="rounded-xs object-cover"
                        />
                      </div>
                      {/* Episode Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-3">
                          <h1 className="text-sm text-gray-400 font-semibold">
                            {formatReadableDate(episode?.published_at)}
                          </h1>
                          <h2 className="text-lg font-bold">
                            {episode?.title}
                          </h2>
                          <p className="text-sm text-gray-600 line-clamp-3">
                            {episode?.description}
                          </p>

                          <div className="w-full flex items-center gap-4 mt-2">
                            <PlayButton height={10} width={10} />
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
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
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
