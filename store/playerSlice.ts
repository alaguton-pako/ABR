import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  currentEpisodeId: string | null;
  currentPodcastTitle: string;
  currentPodcastUrl: string;
  isPlaying: boolean;
  currentTime: number;
  isMuted: boolean;
  duration: number;
  podcastId: string | null;
  // Remove audioElement from state
}

const initialState: PlayerState = {
  currentEpisodeId: null,
  currentPodcastTitle: "",
  currentPodcastUrl: "",
  isPlaying: false,
  currentTime: 0,
  isMuted: false,
  duration: 0,
  podcastId: null,
  // Remove audioElement initialization
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playEpisode: (
      state,
      action: PayloadAction<{
        episodeId: string;
        title: string;
        url: string;
        podcastId: string;
      }>
    ) => {
      const isNewEpisode = state.currentEpisodeId !== action.payload.episodeId;
      
      if (isNewEpisode) {
        // For a completely new episode, reset all state
        state.currentPodcastUrl = action.payload.url;
        state.currentTime = 0;
        state.duration = 0;  // Reset duration too
        state.isPlaying = false; // Explicitly set to not playing
      }
      
      // Always update these values
      state.currentEpisodeId = action.payload.episodeId;
      state.currentPodcastTitle = action.payload.title;
      state.podcastId = action.payload.podcastId;
      
      // Only set to playing if it's NOT a new episode (toggle behavior)
      if (!isNewEpisode) {
        state.isPlaying = true;
      }
    },

    pauseEpisode: (state) => {
      state.isPlaying = false;
    },

    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },

    toggleMute: (state) => {
      state.isMuted = !state.isMuted;
    },

    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

// Remove initAudio and cleanupAudio from exports
export const {
  playEpisode,
  pauseEpisode,
  setCurrentTime,
  toggleMute,
  setDuration,
} = playerSlice.actions;
export default playerSlice.reducer;
