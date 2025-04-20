import Image from "next/image";
import React from "react";
import CustomIcon from "./CustomIcon";
import Link from "next/link";

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
        <div className="w-[300px] h-[400px] rounded-lg overflow-hidden bg-[#F4F4F4] text-card-foreground flex flex-col">
          {/* Top Section with padding */}
          <div className="flex-grow p-4 flex flex-col">
            {/* Image section */}
            <div className="relative h-[70%] w-full">
              <Image
                src={imageSrc}
                alt="image"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between pt-4 flex-grow cursor-pointer">
              <div>
                <h1 className="font-semibold text-lg mb-3">
                  {" "}
                  {title?.length > 35 ? `${title.slice(0, 38)}...` : title}
                </h1>

                {/* Icon Row */}
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full flex justify-center items-center bg-gray-200">
                    <CustomIcon src="/share.png" alt="Share icon" />
                  </div>
                  <div className="h-9 w-9 rounded-full flex justify-center items-center bg-gray-200">
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

          {/* Bottom border line */}
          <div className="h-[8px] w-full bg-[#D5D3D3] rounded-b-lg" />
        </div>
      </Link>
    </>
  );
};

export default CustomCardTwo;
