import React from "react";
import { Slider } from "@/components/ui/slider";
import PlayButton from "./PlayButton";
import CustomIcon from "@/components/ui/CustomIcon";

const PlayComponent = () => {
  return (
    <div className="w-full space-y-2">
      {/* Time indicators and slider */}
      <div className="flex items-center justify-between w-full">
        <span className="text-xs text-[#fff]">00:15</span>
        <Slider
          defaultValue={[25]}
          max={100}
          step={1}
          className="w-[90%] mx-auto"
        />
        <span className="text-xs text-[#fff]">28:04</span>
        <div className="ml-2">
          <CustomIcon src="/speaker.png" alt="icon" />
        </div>
      </div>
      {/* Control buttons */}
      <div className="mt-14">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <CustomIcon src="/rewindLeft.png" alt="icon" />
            <PlayButton />
            <CustomIcon src="/rewindRight.png" alt="icon" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full flex justify-center items-center bg-muted">
              <CustomIcon src="/share.png" alt="Share icon" />
            </div>
            <div className="h-9 w-9 rounded-full flex justify-center items-center bg-muted">
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
  );
};

export default PlayComponent;
