import React from "react";
import Image from "next/image";
import CustomIcon from "@/components/ui/CustomIcon";
import Content from "@/components/podcastPageComponent/Content";

const page = () => {
  return (
    <>
      <div className="h-[450px] w-full bg-gradient-to-br from-[#2B3221] to-[#817e7e] p-8">
        {/* Main container */}
        <div className="flex justify-between p-4 h-[400px]">
          {/* Left Section */}
          <div className="flex items-center gap-4 md:gap-8 w-full md:w-8/12">
            <div className="flex-1 relative w-full h-full">
              <Image
                src="/advert6.png"
                alt="Podcast Image"
                layout="fill"
                objectFit="cover"
                className="rounded-xs"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h1 className="text-lg text-gray-400 font-semibold">Podcast</h1>
                <h2 className="text-lg md:text-2xl text-white font-bold">
                  Hope For the Widow
                </h2>
                <p className="text-sm md:text-base text-white">
                  The show aims to shed light on the challenges faced by less
                  privileged widows, providing support and a platform to promote
                  a better life. Join us in making a difference.
                  #EmpoweringWidows #SupportingWidows.
                </p>

                <div className="flex flex-col gap-2">
                  <h3 className="text-sm text-gray-400 font-semibold">
                    Available on
                  </h3>
                  <div className="w-full flex items-center gap-4 mt-2">
                    <CustomIcon
                      src="/spotify.png"
                      alt="icon"
                      height={26}
                      width={26}
                    />
                    <CustomIcon
                      src="/radioAir.png"
                      alt="icon"
                      height={26}
                      width={26}
                    />
                    <CustomIcon
                      src="/slack.png"
                      alt="icon"
                      height={30}
                      width={30}
                    />
                    <CustomIcon
                      src="/wokpa.png"
                      alt="icon"
                      height={30}
                      width={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="">
            <div className="text-white hover:text-[#9CCC65] cursor-pointer transition-colors">
              <CustomIcon src="/vector.png" alt="share icon" />
            </div>
          </div>
        </div>
      </div>
      <Content />
    </>
  );
};

export default page;
