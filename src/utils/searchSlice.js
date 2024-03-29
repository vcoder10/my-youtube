import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchedResults: null,
    categoryByVideos: null,
    liveVideos: null,
    searchCache: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      //state = { ...action.payload, ...state };
      const key = Object.keys(action.payload)[0]; // Get the single key
      const valueArray = action.payload[key]; // Get the array value

      state.searchCache[key] = valueArray;
    },
    addSearchedMovie: (state, action) => {
      state.searchedResults = action.payload;
    },

    addCategoryByVideos: (state, action) => {
      state.categoryByVideos = action.payload;
    },
    addLiveVideos: (state, action) => {
      state.liveVideos = action.payload;
    },
  },
});

export const {
  cacheResults,
  addSearchedMovie,
  addLiveVideos,
  addCategoryByVideos,
} = searchSlice.actions;

export default searchSlice.reducer;
