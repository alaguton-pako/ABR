import React from "react";
import { Button } from "@/components/ui/button";
import CustomIcon from "@/components/ui/CustomIcon";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <>
      <div className="w-full md:w-[98%] mx-auto bg-[#F6E8E8] p-4 mt-28 mb-20">
        <div className="w-full md:w-[80%] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center gap-8 w-full max-w-[500px] mx-auto px-4">
              {/* Content remains the same as before */}
              <div className="flex flex-col gap-4 w-full">
                <h1 className="text-3xl font-bold">Never Stop Listening!</h1>
                <h4 className="text-xl font-medium max-w-[200px] sm:max-w-full">
                  {" "}
                  {/* Adjusts on small screens */}
                  Every episode is a journey you dont want to miss out on.
                </h4>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <p className="max-w-[400px] sm:max-w-full">
                  {" "}
                  {/* Adjusts on small screens */}
                  Get the latest headlines and unique ABR stories, sent every
                  weekday.
                </p>

                <div className="flex flex-col items-center gap-1 w-full lg:flex-row lg:gap-2">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="bg-[#D9D9D9] p-2 h-[40px] w-full sm:flex-1"
                  />
                  <div className="flex items-center gap-1 h-[40px] w-full sm:w-auto">
                    {" "}
                    {/* Adjusts width */}
                    <Button className="bg-[#CC0001] text-white h-full px-4 rounded-sm w-full sm:w-auto">
                      {" "}
                      {/* Full width on mobile */}
                      Get me in
                    </Button>
                    <div className="hidden md:block">
                      <CustomIcon src="/alert-circle.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative h-[400px] mt-6">
              {" "}
              {/* Container needs relative positioning */}
              {/* Big Image (300x300) - Centered */}
              <div className="w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] overflow-hidden relative rounded-full mx-auto">
                <Image
                  src="/newsLetterIcon3.png"
                  alt="Main image"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Small Image (150x150) - Bottom left overlap */}
              <div className="absolute w-[150px] h-[150px] xl:w-[180px] xl:h-[180px] overflow-hidden rounded-full top-[33%] md:bottom-[10%] md:left-[10%] z-10">
                <Image
                  src="/newsLetterIcon4.png"
                  alt="Overlapping image 1"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Icon 2 - Top left of small image */}
              <div className="absolute w-[50px] h-[50px] top-[33%] left-0 md:top-[43%] lg:top-[40%] md:left-[5%] z-40">
                <CustomIcon
                  src="/newsLetterIcon2.png"
                  height={50}
                  width={50}
                  alt="Small icon 1"
                />
              </div>
              {/* Icon 1 - Top right of big image (not overlapping) */}
              <div className="absolute w-[50px] h-[50px] top-0 right-[15%] md:top-[-10px] lg:top-[5%] md:right-0 lg:right-[18%] z-10">
                <CustomIcon
                  src="/newsLeterIcon.png"
                  height={50}
                  width={50}
                  alt="Small icon 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
