import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: {
    GptSearchView: false,
    MovieResults: null,
    MovieName: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.GptSearchView = !state.GptSearchView;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.MovieName = movieNames;
      state.MovieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
