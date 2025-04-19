import React from "react";
import CustomCardLayout from "../ui/CustomCardLayout";
import { CustomCard } from "../ui/CustomCard";

const NewlyAddedEpisode = () => {
  const cardData = [
    {
      id: 1,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 2,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 3,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 4,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 5,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
  ];
  return (
    <>
      <CustomCardLayout>
        <div className="mt-20 mb-4 flex flex-col gap-1">
          <h1 className="text-[#282828] text-xl font-bold">
            Newly added episodes
          </h1>
        </div>
        <section>
          <div className="flex flex-wrap gap-6">
            {cardData.map(({ id, ...rest }) => (
              <CustomCard key={id} {...rest} />
            ))}
          </div>
        </section>
      </CustomCardLayout>
    </>
  );
};

export default NewlyAddedEpisode;
