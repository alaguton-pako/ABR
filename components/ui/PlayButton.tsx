import React from "react";
import { Play, Pause } from "lucide-react"; // Import the icons from lucide-react

interface PlayButtonProps {
  width?: number;
  height?: number;
  className?: string;
  isPlaying?: boolean;
}

const PlayButton = ({
  width = 18,
  height = 18,
  className = "",
  isPlaying = false,
}: PlayButtonProps) => {
  return (
    <div
      className={`bg-red-700 hover:bg-red-600 transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer ${className}`}
    >
      {isPlaying ? (
        <Pause width={width} height={height} color="#fff" />
      ) : (
        <Play width={width} height={height} color="#fff" />
      )}
    </div>
  );
};

export default PlayButton;
