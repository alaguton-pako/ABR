import Image from "next/image";
import React from "react";
import CustomIcon from "./CustomIcon";
import Link from "next/link";
import PlayButton from "./PlayButton";
interface CustomCardTwoProps {
  title: string;
  imageSrc: string;
  podcastId?: number;
}

const CustomCardTwo: React.FC<CustomCardTwoProps> = ({
  title,
  imageSrc,
  podcastId,
}) => {
  return (
    <>
      <Link href={`/podcast/${podcastId ?? 1}`}>
        <div className="group w-[300px] h-[400px] rounded-lg overflow-hidden bg-[#F4F4F4] hover:bg-[#E0E0E0] text-card-foreground flex flex-col transition-all duration-300 relative">
          {/* Top Section with padding */}
          <div className="flex-grow p-4 flex flex-col">
            {/* Image section */}
            <div className="relative h-[70%] w-full">
              <Image
                src={imageSrc}
                alt="image"
                layout="fill"
                objectFit="cover"
                className="rounded-md group-hover:brightness-95 transition-all duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between pt-4 flex-grow cursor-pointer">
              <div>
                <h1 className="font-semibold text-lg mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {title?.length > 35 ? `${title.slice(0, 38)}...` : title}
                </h1>

                {/* Icon Row */}
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full flex justify-center items-center bg-gray-200 hover:bg-gray-300 transition-colors">
                    <CustomIcon src="/share.png" alt="Share icon" />
                  </div>
                  <div className="h-9 w-9 rounded-full flex justify-center items-center bg-gray-200 hover:bg-gray-300 transition-colors">
                    <CustomIcon
                      src="/gift.png"
                      alt="Gift icon"
                      height={14}
                      width={14}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Play Button - Bottom Right (Fixed Position) */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <PlayButton />
          </div>

          {/* Bottom border line - Darker on hover */}
          <div className="h-[8px] rounded-4xl w-full bg-[#D5D3D3] group-hover:bg-[#B8B6B6] rounded-b-xl transition-colors duration-300" />
        </div>
      </Link>
    </>
  );
};

export default CustomCardTwo;
