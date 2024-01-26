import { createSlice } from "@reduxjs/toolkit";

const configSlic = createSlice({
  name: "config",
  initialState: {
    Language: "en",
  },
  reducers: {
    addLanguage: (state, action) => {
      state.Language = action.payload;
    },
  },
});

export const { addLanguage } = configSlic.actions;
export default configSlic.reducer;
