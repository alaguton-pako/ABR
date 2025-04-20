"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playEpisode, pauseEpisode } from "@/store/playerSlice";
import { RootState } from "@/store";
import PlayButton from "@/components/ui/PlayButton"; // Adjust this import

const PodcastControl: React.FC = () => {
  const dispatch = useDispatch();
  const {
    isPlaying,
    currentPodcastTitle,
    currentPodcastUrl,
    currentEpisodeId,
    podcastId,
  } = useSelector((state: RootState) => state.player);

  const togglePlayPause = () => {
    if (isPlaying) {
      dispatch(pauseEpisode());
    } else {
      dispatch(
        playEpisode({
          episodeId: currentEpisodeId || "",
          title: currentPodcastTitle || "Nothing to play",
          url: currentPodcastUrl || "",
          podcastId: podcastId?.toString() || "defaultPodcastId",
        })
      );
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div onClick={togglePlayPause} className="cursor-pointer">
        <PlayButton isPlaying={isPlaying} />
      </div>
      <span className="text-white text-sm">
        {currentPodcastTitle || "No Podcast Playing"}
      </span>
    </div>
  );
};

export default PodcastControl;
