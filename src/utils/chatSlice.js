import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length === LIVE_CHAT_COUNT)
        state.messages.splice(0, 1);
      state.messages.push(action.payload);

      // ye method kerna hai to ui me reverse se map kerna hoga
      // state.messages.splice(LIVE_CHAT_COUNT, 1);
      // state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
