import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  currentEpisodeId: string | null;
  currentPodcastTitle: string;
  currentPodcastUrl: string;
  isPlaying: boolean;
  currentTime: number;
  isMuted: boolean;
  duration: number;
  podcastId: string | null; // Update to string | null to match action payload
}

const initialState: PlayerState = {
  currentEpisodeId: null,
  currentPodcastTitle: "",
  currentPodcastUrl: "",
  isPlaying: false,
  currentTime: 0,
  isMuted: false,
  duration: 0,
  podcastId: null, // Initially null
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
      state.currentEpisodeId = action.payload.episodeId;
      state.currentPodcastTitle = action.payload.title;
      state.currentPodcastUrl = action.payload.url;
      state.podcastId = action.payload.podcastId; 
      state.isPlaying = true;
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

export const {
  playEpisode,
  pauseEpisode,
  setCurrentTime,
  toggleMute,
  setDuration,
} = playerSlice.actions;
export default playerSlice.reducer;
