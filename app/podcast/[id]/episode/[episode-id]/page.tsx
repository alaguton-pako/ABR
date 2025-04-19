import React from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Dot } from "lucide-react";
import PlayComponent from "@/components/ui/PlayComponent";
import Content from "@/components/episodePageComponent/Content";
import NewsLetter from "@/components/landingPageComponent/NewsLetter";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="relative h-[85vh] w-full bg-gradient-to-br from-[#2B3221]/90 to-[#817e7e]/20 p-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/advert6.png"
            alt="Background"
            fill
            className="object-cover blur-[2px]"
            quality={80}
            priority
          />
        </div>
        {/* Strong Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B3221]/95 to-[#817e7e]/80 -z-10" />
        {/* Back Button */}
        <Link href={"/podcast/1"}>
          <div className="flex items-center text-white ml-2 mb-6 cursor-pointer">
            <ChevronLeft />
            <span className="font-medium">Back to podcast</span>
          </div>
        </Link>

        {/* Content Container */}
        <div className="flex p-4 h-full">
          <div className="flex items-start gap-8 w-full">
            {/* Fixed Size Image Container */}
            <div className="flex-shrink-0 relative w-[150px] h-[150px]">
              <Image
                src="/advert6.png"
                alt="Podcast Image"
                fill
                className="rounded-xs object-cover"
              />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto max-h-[80vh] pr-4">
              <div className="flex flex-col text-sm">
                <div className="flex items-center gap-6">
                  <h1 className=" text-gray-300 font-semibold">SEPT 3, 2023</h1>
                  <div className="text-sm flex items-center text-gray-300">
                    <Dot size={40} />
                    28 MIN
                  </div>
                </div>
                <h2 className="text-2xl lg:text-3xl text-white font-bold">
                  Hope For the Widow
                </h2>
                <p className="text-sm text-gray-200 leading-relaxed max-w-[80%]">
                  The show aims to shed light on the challenges faced by less
                  privileged widows, providing support and a platform to promote
                  a better life. Join us in making a difference. privileged
                  widows, providing support and a platform to promote a better
                  life. Join us in making a difference. privileged widows,
                  providing support and a platform to promote a better life.
                  Join us in making a difference.{" "}
                  <span className="text-[#BCFFB6] font-medium">READ MORE</span>
                </p>
              </div>
              <div className="mt-20">
                <PlayComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-32">
        <Content />
      </div>
      <NewsLetter />
    </div>
  );
};

export default page;
