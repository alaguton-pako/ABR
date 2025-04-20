import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "@/components/ui/slider";
import PlayButton from "./PlayButton";
import CustomIcon from "@/components/ui/CustomIcon";
import { VolumeX } from "lucide-react";
import { Volume2 } from "lucide-react";
import {
  playEpisode,
  pauseEpisode,
  setCurrentTime,
  toggleMute,
} from "@/store/playerSlice";
import { RootState } from "@/store";

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
  const dispatch = useDispatch();
  const { isPlaying, currentTime, duration, isMuted, currentEpisodeId } =
    useSelector((state: RootState) => state.player);

  // Only show playing state if this is the active episode AND isPlaying
  const isActiveEpisode = currentEpisodeId === episodeId.toString();
  const showAsPlaying = isPlaying && isActiveEpisode;

  const togglePlay = () => {
    // Early return if no episode is selected
    if (!contentUrl) return;

    if (isActiveEpisode) {
      // Toggle play/pause for current episode
      if (isPlaying) {
        dispatch(pauseEpisode());
      } else {
        dispatch(
          playEpisode({
            episodeId: episodeId.toString(),
            title: podcastTitle,
            url: contentUrl,
            podcastId: podcastId.toString(),
          })
        );
      }
    } else {
      // For new episode, force pause state first
      dispatch(pauseEpisode());
      // Then start playing new episode
      dispatch(
        playEpisode({
          episodeId: episodeId.toString(),
          title: podcastTitle,
          url: contentUrl,
          podcastId: podcastId.toString(),
        })
      );
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (!isActiveEpisode) return; // Prevent seeking on inactive episodes
    const newTime = (value[0] / 100) * duration;
    dispatch(setCurrentTime(newTime));
  };

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const rewind = (seconds: number) => {
    if (!isActiveEpisode) return;
    const newTime = Math.max(currentTime - seconds, 0);
    dispatch(setCurrentTime(newTime));
  };

  const fastForward = (seconds: number) => {
    if (!isActiveEpisode) return;
    const newTime = Math.min(currentTime + seconds, duration);
    dispatch(setCurrentTime(newTime));
  };

  const toggleMuteHandler = () => {
    dispatch(toggleMute());
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between w-full">
        <span className="text-xs text-white">
          {isActiveEpisode ? formatTime(currentTime) : "0:00"}
        </span>
        <Slider
          value={isActiveEpisode ? [(currentTime / duration) * 100 || 0] : [0]}
          max={100}
          step={1}
          onValueChange={handleSliderChange}
          className="w-[90%] mx-auto"
        />
        <span className="text-xs text-white">
          {isActiveEpisode ? formatTime(duration) : "0:00"}
        </span>
        <div className="ml-2">
          <div onClick={toggleMuteHandler} className="ml-1">
            {isMuted ? (
              <VolumeX size={24} color="#ffff" className="cursor-pointer"/>
            ) : (
              <Volume2 size={24} color="#ffff" className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div onClick={() => rewind(10)} className="cursor-pointer">
              <CustomIcon src="/rewindLeft.png" alt="Rewind icon" />
            </div>
            <button onClick={togglePlay}>
              <PlayButton isPlaying={showAsPlaying} />{" "}
              {/* Fixed to use showAsPlaying */}
            </button>
            <div onClick={() => fastForward(10)} className="cursor-pointer">
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
