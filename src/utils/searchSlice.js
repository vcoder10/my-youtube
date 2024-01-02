import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchedResults: null,
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
  },
});

export const { cacheResults, addSearchedMovie } = searchSlice.actions;

export default searchSlice.reducer;
