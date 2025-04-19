import React from "react";
import CustomCardLayout from "../ui/CustomCardLayout";
import { CustomCard } from "../ui/CustomCard";
import { Separator } from "@/components/ui/separator";
import PodcastCard from "../ui/PodcastCard";
const Content = () => {
  const episodes = [
    {
      imageSrc: "/advert6.png",
      title: "The Funeral Experience: The Good, the Bad, and the Ugly",
      date: "Sept 2, 2023 | 28 mins",
    },
    {
      imageSrc: "/advert6.png",
      title: "Widowhood: Strength in Silence",
      date: "Sept 9, 2023 | 32 mins",
    },
    {
      imageSrc: "/advert6.png",
      title: "The Future of Remote Work",
      date: "Sept 15, 2023 | 35 mins",
    },
  ];
  return (
    <>
      <CustomCardLayout>
        <div>
          <h1 className="font-bold text-base text-[#5A5A5A]">
            NEXT EPISODES IN QUEUE
          </h1>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {episodes.map((ep, index) => (
            <PodcastCard
              key={index}
              imageSrc={ep.imageSrc}
              title={ep.title}
              date={ep.date}
            />
          ))}
        </div>
      </CustomCardLayout>
    </>
  );
};

export default Content;
