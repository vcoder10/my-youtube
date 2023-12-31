import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoReducer from "./videoSlice";
import searchRducer from "./searchSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoReducer,
    search: searchRducer,
  },
});

export default store;
