import React from "react";
import CustomCardLayout from "../ui/CustomCardLayout";
import Sections from "../ui/Sections";
import CustomCardTwo from "../ui/CustomCardTwo";

const OtherPodcast = () => {
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
      id: 1,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 1,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 1,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
  ];
  return (
    <CustomCardLayout>
      <section>
        <Sections sectionTitle="Other Podcast" cardData={cardData} />
      </section>
    </CustomCardLayout>
  );
};

export default OtherPodcast;
