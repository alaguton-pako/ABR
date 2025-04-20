// components/Sections.tsx
import React from "react";
import CustomCardTwo from "./CustomCardTwo";
import ViewMoreButton from "./ViewMoreButton";

interface CardData {
  id?: number;
  title: string;
  picture_url: string;
}

type SectionsProps = {
  sectionTitle: string;
  cardData: CardData[];
};

const Sections: React.FC<SectionsProps> = ({ sectionTitle, cardData }) => {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-1">
          <div className="h-3 w-[2px] bg-[#5A5A5A]"></div>
          <h3 className="text-[#CC0001] text-md font-semibold">
            {sectionTitle}
          </h3>
        </div>
        <ViewMoreButton />
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6">
        {cardData?.map((item) => (
          <CustomCardTwo
            key={item?.id}
            title={item?.title}
            imageSrc={item?.picture_url}
            podcastId={item?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;
