"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playEpisode, pauseEpisode } from "@/store/playerSlice";
import { RootState } from "@/store";
import PlayButton from "@/components/ui/PlayButton";
import Link from "next/link";

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
    if (!currentEpisodeId) return; // Don't allow play if no episode selected

    if (isPlaying) {
      dispatch(pauseEpisode());
    } else {
      dispatch(
        playEpisode({
          episodeId: currentEpisodeId,
          title: currentPodcastTitle || "Untitled Podcast",
          url: currentPodcastUrl || "",
          podcastId: podcastId || "",
        })
      );
    }
  };

  return (
    <>
      <Link href={`/podcast/${podcastId}/episode/${currentEpisodeId}`}>
        <div className="flex items-center gap-2">
          <div onClick={togglePlayPause} className="cursor-pointer">
            <PlayButton isPlaying={isPlaying && !!currentEpisodeId} />
          </div>
          <span className="text-white text-xs line-clamp-1">
            {currentPodcastTitle || "No Podcast Selected"}
          </span>
        </div>
      </Link>
    </>
  );
};

export default PodcastControl;
