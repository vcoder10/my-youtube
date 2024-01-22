import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    popularVideo: [],
    videoDetails: null,
    channelDetails: null,
    channelAllVideo: null,
  },
  reducers: {
    addPopularVideo: (state, action) => {
      state.popularVideo = [...state.popularVideo, ...action.payload];
    },
    addVideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },

    clearVideoDetails: (state) => {
      state.videoDetails = null;
    },
    addChannelDetails: (state, action) => {
      state.channelDetails = action.payload;
    },

    addChannelAllVideo: (state, action) => {
      state.channelAllVideo = action.payload;
    },
  },
});

export const {
  addPopularVideo,
  addVideoDetails,

  clearVideoDetails,
  addChannelDetails,

  addChannelAllVideo,
} = videoSlice.actions;

export default videoSlice.reducer;
