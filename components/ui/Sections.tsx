// components/Sections.tsx
import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomCardTwo from "./CustomCardTwo"; 


// Define type for card data
type CardItem = {
  id: number;
  image: string;
  date: string;
  time: string;
  title: string;
  description: string;
};

type SectionsProps = {
  sectionTitle: string;
  cardData: CardItem[];
  showButton?: boolean;
  onViewAllClick?: () => void;
};

const Sections: React.FC<SectionsProps> = ({
  sectionTitle,
  cardData,
  showButton = true,
  onViewAllClick,
}) => {
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
        {showButton && (
          <Button
            className="bg-inherit text-blue-400 border rounded-full"
            onClick={onViewAllClick}
          >
            View All
            <ChevronRight className="ml-1" size={16} />
          </Button>
        )}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6">
        {cardData.map((item) => (
          <CustomCardTwo
            key={item.id}
            title={item.title}
            imageSrc={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;
