import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    popularVideo: null,
    videoDetails: null,
    channelDetails: null,
    channelPlaylists: null,
  },
  reducers: {
    addPopularVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
    addVideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },
    addChannelDetails: (state, action) => {
      state.channelDetails = action.payload;
    },
    addChannelPlaylists: (state, action) => {
      state.channelPlaylists = action.payload;
    },
  },
});

export const {
  addPopularVideo,
  addVideoDetails,
  addChannelDetails,
  addChannelPlaylists,
} = videoSlice.actions;

export default videoSlice.reducer;
