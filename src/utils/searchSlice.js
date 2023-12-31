import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      //state = { ...action.payload, ...state };
      const key = Object.keys(action.payload)[0]; // Get the single key
      const valueArray = action.payload[key]; // Get the array value

      state[key] = valueArray;
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
