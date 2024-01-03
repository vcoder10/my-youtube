import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    live: false,
    theme: false,
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
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggleMenu, closeMenu, toggleLive, openMenu, toggleTheme } =
  appSlice.actions;

export default appSlice.reducer;
