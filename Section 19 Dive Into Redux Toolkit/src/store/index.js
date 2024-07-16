// import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

// export const reset = createAction("app/reset");

// console.log(reset())
// console.log(reset.toString());

// const moviesSlice = createSlice({
//   name: "movie",
//   initialState: [],
//   reducers: {
//     addMovie(state, action) {
//       state.push(action.payload);
//     },
//     removeMovie(state, action) {
//       const index = state.indexOf(action.payload);
//       state.splice(index, 1);
//     },
//     // ,
//     // reset(state, action) {
//     //   console.log(action);
//     //   return [];
//     // },
//   },
//   extraReducers(builder) {
//     builder.addCase(reset, (state, action) => {
//       return [];
//     });
//   },
// });

// const songsSlice = createSlice({
//   name: "song",
//   initialState: [],
//   reducers: {
//     // 'song' + '/' + 'addSong' = 'song/addSong'
//     addSong(state, action) {
//       // console.log(state)
//       // console.log(state.length)
//       // STATE IS NOT THE BIG STATE OBJECT
//       // IN THE STORE
//       // IT IS THE PIECE OF STATE MANAGED
//       // BY THIS REDUCER
//       state.push(action.payload);
//     },
//     // 'song' + '/' + 'removeSong' = 'song/removeSong'
//     removeSong(state, action) {
//       // action.payload === string, the song we want to remove
//       const index = state.indexOf(action.payload);
//       state.splice(index, 1);
//     },
//   },
//   extraReducers(builder) {
//     // builder.addCase("movie/reset", (state, action) => {
//     // builder.addCase(moviesSlice.actions.reset.toString(), (state, action) => {
//     // builder.addCase(moviesSlice.actions.reset, (state, action) => {
//     //   return [];
//     // });
//     builder.addCase(reset, (state, action) => {
//       return [];
//     });
//   },
// });

const store = configureStore({
  reducer: {
    // songs: songsSlice.reducer,

    songs: songsReducer,
    movies: moviesReducer,
    // asdfghjkl: songsSlice.reducer,

    // movies: moviesSlice.reducer,
  },
});

// console.log(store.getState());

// console.log(songsSlice.actions)
// console.log(songsSlice.actions.addSong())
// console.log(songsSlice.actions.addSong("Some song!"))

// console.log(store);

// const startingState = store.getState();
// // console.log(startingState);
// console.log(JSON.stringify(startingState));

// store.dispatch(
//   //   {
//   //   type: "song/addSong",
//   //   payload: "New Song!!!",
//   // }
//   songsSlice.actions.addSong("Some song!")
// );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

// export { store };

// console.log(songsSlice.actions.addSong())

// export const { addSong, removeSong } = songsSlice.actions;
// export const { addMovie, removeMovie, reset } = moviesSlice.actions;
// export const { addMovie, removeMovie } = moviesSlice.actions;

export { store, reset, addSong, removeSong, addMovie, removeMovie };

// console.log(moviesSlice.actions.reset.toString());
