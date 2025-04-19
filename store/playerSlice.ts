// THIS FILES ISNT NEEDED BUT INCLUDED FOR DEMONSTRATION SAKE
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
  currentEpisodeId: string | null
  isPlaying: boolean
}

const initialState: PlayerState = {
  currentEpisodeId: null,
  isPlaying: false,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playEpisode: (state, action: PayloadAction<string>) => {
      state.currentEpisodeId = action.payload
      state.isPlaying = true
    },
    pauseEpisode: (state) => {
      state.isPlaying = false
    },
  },
})

export const { playEpisode, pauseEpisode } = playerSlice.actions
export default playerSlice.reducer
