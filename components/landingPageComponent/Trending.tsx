import React from "react";
import Image from "next/image";
import PlayButton from "../ui/PlayButton";
import CustomCardLayout from "../ui/CustomCardLayout";
import CustomCardAnimation from "../ui/CustomCardAnimation";
const Trending = () => {
  return (
    <CustomCardLayout>
      <div className="mt-20 mb-4 flex flex-col gap-1">
        <h1 className="text-[#282828] text-xl font-bold">Trending This Week</h1>
        <h3 className="text-[#CC0001] text-xs font-semibold border-l-4 pl-1 border-[#5A5A5A]">
          Featured Podcasts
        </h3>
      </div>
      <section>
        <CustomCardAnimation />
      </section>
    </CustomCardLayout>
  );
};

export default Trending;
