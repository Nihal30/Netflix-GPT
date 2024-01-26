import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: {
    GptSearchView: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.GptSearchView = !state.GptSearchView;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
