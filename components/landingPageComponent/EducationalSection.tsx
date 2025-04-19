import React from "react";
import Sections from "../ui/Sections";
import CustomCardLayout from "../ui/CustomCardLayout";
const EducationalSection = () => {
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
        {/* educational section */}
        <Sections sectionTitle="Educational Section" cardData={cardData} />
      </section>
    </CustomCardLayout>
  );
};

export default EducationalSection;
