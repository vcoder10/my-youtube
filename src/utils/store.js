import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoReducer from "./videoSlice";
import searchRducer from "./searchSlice";
import chatReducer from "./chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoReducer,
    search: searchRducer,
    chat: chatReducer,
  },
});

export default store;
