import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieSuggestions: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch ;
        },

        addGptMovieResult: (state, action) => {
            const { movieNames, movieSuggestions } = action.payload;
            state.movieNames = movieNames;
            state.movieSuggestions = movieSuggestions;
        }
    }
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;