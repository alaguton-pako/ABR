import React from "react";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";

interface ExploreCardProps {
  image: string;
  title: string;
}

const ExploreOtherCat = ({ image, title }: ExploreCardProps) => {
  return (
    <div className="relative w-[300px] h-[200px] group overflow-hidden rounded-xs cursor-pointer">
      {/* Image */}
      <Image src={image} alt={title} fill className="object-cover" />

      {/* Gradient Overlay (Bottom Only) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Title Container */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-white font-medium text-lg drop-shadow-xl flex-1">
            {title}
          </h1>
          {/* Arrow positioned at end */}
          <div className="ml-4">
            <ArrowBigRight
              className="text-white h-5 w-5 opacity-0 group-hover:opacity-100 
                         transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOtherCat;
