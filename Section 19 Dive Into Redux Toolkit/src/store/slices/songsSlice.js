import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state, action) {
      // console.log(state)
      // console.log(state.length)
      // STATE IS NOT THE BIG STATE OBJECT
      // IN THE STORE
      // IT IS THE PIECE OF STATE MANAGED
      // BY THIS REDUCER
      state.push(action.payload);
    },
    // 'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong(state, action) {
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    // builder.addCase("movie/reset", (state, action) => {
    // builder.addCase(moviesSlice.actions.reset.toString(), (state, action) => {
    // builder.addCase(moviesSlice.actions.reset, (state, action) => {
    //   return [];
    // });
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
