import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { Slider } from "@/components/ui/slider";
import PlayButton from "./PlayButton";
import CustomIcon from "@/components/ui/CustomIcon";
import { Volume, VolumeX } from "lucide-react";
import {
  playEpisode,
  pauseEpisode,
  setCurrentTime,
  toggleMute,
  setDuration,
} from "@/store/playerSlice";
import { RootState } from "@/store"; // Import RootState

interface PlayComponentProps {
  contentUrl: string;
  episodeId: number;
  podcastId: number;
  podcastTitle: string;
}

const PlayComponent: React.FC<PlayComponentProps> = ({
  contentUrl,
  podcastTitle,
  podcastId,
  episodeId,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const dispatch = useDispatch();

  // Use Redux state
  const { isPlaying, currentTime, duration, isMuted } = useSelector(
    (state: RootState) => state.player
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      dispatch(setCurrentTime(audio.currentTime)); // Always sync Redux with audio
    };

    const handleLoadedMetadata = () => {
      if (audio.duration !== duration) {
        dispatch(setDuration(audio.duration)); // Set initial duration
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [currentTime, duration, dispatch]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;


    if (isPlaying) {
      dispatch(pauseEpisode()); // Dispatch pause action
      audio.pause();
    } else {
      dispatch(
        playEpisode({
          episodeId: episodeId.toString(),
          title: podcastTitle,
          url: contentUrl,
          podcastId: podcastId.toString(),
        })
      );
      audio.play();
    }
  };

  const handleSliderChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (value[0] / 100) * duration;
    audio.currentTime = newTime;
    dispatch(setCurrentTime(newTime)); // Update the current time in Redux
  };

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const rewind = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(audio.currentTime - seconds, 0); // Prevent negative time
    dispatch(setCurrentTime(audio.currentTime)); // Sync with Redux
  };

  const fastForward = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(audio.currentTime + seconds, duration); // Prevent exceeding duration
    dispatch(setCurrentTime(audio.currentTime)); // Sync with Redux
  };

  const toggleMuteHandler = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    dispatch(toggleMute()); // Dispatch toggle mute action
  };

  return (
    <div className="w-full space-y-2">
      <audio ref={audioRef} src={contentUrl} preload="metadata" />

      {/* Time indicators and slider */}
      <div className="flex items-center justify-between w-full">
        <span className="text-xs text-white">{formatTime(currentTime)}</span>
        <Slider
          value={[(currentTime / duration) * 100 || 0]}
          max={100}
          step={1}
          onValueChange={handleSliderChange}
          className="w-[90%] mx-auto"
        />
        <span className="text-xs text-white">{formatTime(duration)}</span>
        <div className="ml-2">
          {/* Mute/Unmute button */}
          <div onClick={toggleMuteHandler} className="ml-1">
            {isMuted ? (
              <VolumeX size={24} color="#ffff" />
            ) : (
              <Volume size={24} color="#ffff" />
            )}
          </div>
        </div>
      </div>

      {/* Control buttons */}
      <div className="mt-14">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            {/* Rewind button (10 seconds backward) */}
            <div
              onClick={() => rewind(10)} // Rewind 10 seconds
              className="cursor-pointer"
            >
              <CustomIcon src="/rewindLeft.png" alt="Rewind icon" />
            </div>
            <button onClick={togglePlay}>
              <PlayButton isPlaying={isPlaying} />
            </button>
            {/* Forward button (10 seconds forward) */}
            <div
              onClick={() => fastForward(10)} // Fast forward 10 seconds
              className="cursor-pointer"
            >
              <CustomIcon src="/rewindRight.png" alt="Forward icon" />
            </div>
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
