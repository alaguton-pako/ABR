import React from "react";
import CustomCardLayout from "../ui/CustomCardLayout";
import Sections from "../ui/Sections";

const CategoryListening = () => {
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
      <div className="mt-20 mb-4">
        <div className="p-4 bg-[#F0E4FF]">
          <h1 className="text-[#282828] text-xl font-bold">
            LISTEN BY ABR CATEGORIES
          </h1>
        </div>
      </div>
      <section>
        {/* news and storytelling */}
        <Sections sectionTitle="News & Storytelling" cardData={cardData} />
      </section>
    </CustomCardLayout>
  );
};

export default CategoryListening;
