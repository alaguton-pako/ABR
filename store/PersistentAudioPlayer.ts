import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setCurrentTime, setDuration, pauseEpisode } from "@/store/playerSlice";
import { store } from "@/store";

const PersistentAudioPlayer = () => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Get all necessary state from Redux
  const { currentPodcastUrl, isPlaying, currentTime, isMuted } = useSelector(
    (state: RootState) => state.player
  );

  // Initialize audio element and restore state
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    // Restore state from persistence
    const persistedState = store.getState().player;
    if (persistedState.currentPodcastUrl) {
      audio.src = persistedState.currentPodcastUrl;
      audio.currentTime = persistedState.currentTime;
      audio.muted = persistedState.isMuted;

      if (persistedState.isPlaying) {
        audio.play().catch((error) => {
          console.error("Autoplay failed:", error);
          dispatch(pauseEpisode());
        });
      }
    }

    const handleTimeUpdate = () => {
      dispatch(setCurrentTime(audio.currentTime));
    };

    const handleLoadedMetadata = () => {
      dispatch(setDuration(audio.duration));
    };

    const handleEnded = () => {
      dispatch(pauseEpisode());
    };

    const handleError = () => {
      console.error("Audio playback error");
      dispatch(pauseEpisode());
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.src = "";
    };
  }, [dispatch]);

  // Handle URL changes
  useEffect(() => {
    if (!audioRef.current || !currentPodcastUrl) return;

    if (audioRef.current.src !== currentPodcastUrl) {
      audioRef.current.pause(); // stop the previous audio
      audioRef.current.src = currentPodcastUrl;
      audioRef.current.currentTime = 0;

      if (isPlaying) {
        // Delay slightly to allow new src to load
        setTimeout(() => {
          audioRef.current?.play().catch((error) => {
            console.error("Playback after URL change failed:", error);
            dispatch(pauseEpisode());
          });
        }, 0);
      }
    }
  }, [currentPodcastUrl, isPlaying, dispatch]);

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Playback failed:", error);
        dispatch(pauseEpisode());
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, dispatch]);

  // Handle mute/unmute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Handle seeking
  useEffect(() => {
    if (!audioRef.current) return;

    // Only update if difference is significant (>0.5s)
    if (Math.abs(audioRef.current.currentTime - currentTime) > 0.5) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  return null;
};

export default PersistentAudioPlayer;
