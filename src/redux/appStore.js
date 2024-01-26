import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/movieSlice";
import gptSlice from "./slice/gptSlice";
import configReducer from "./slice/configSlic";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptSlice,
    config: configReducer,
  },
});

export default appStore;
