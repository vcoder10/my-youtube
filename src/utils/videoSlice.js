import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    popularVideo: null,
    videoDetails: null,
    channelDetails: null,
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
  },
});

export const { addPopularVideo, addVideoDetails, addChannelDetails } =
  videoSlice.actions;

export default videoSlice.reducer;
