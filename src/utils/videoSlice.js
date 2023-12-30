import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    popularVideo: null,
  },
  reducers: {
    addPopularVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
  },
});

export const { addPopularVideo } = videoSlice.actions;

export default videoSlice.reducer;
