import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    live: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    toggleLive: (state) => {
      state.live = !state.live;
    },
  },
});

export const { toggleMenu, closeMenu, toggleLive, openMenu } = appSlice.actions;

export default appSlice.reducer;
