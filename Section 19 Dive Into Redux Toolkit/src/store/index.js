import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state, action) {
      // STATE IS NOT THE BIG STATE OBJECT
      // IN THE STORE
      // IT IS THE PIECE OF STATE MANAGED
      // BY THIS REDUCER
      state.push(action.payload);
    },
    // 'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    // asdfghjkl: songsSlice.reducer,
  },
});

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

export { store };

// console.log(songsSlice.actions.addSong())

export const { addSong } = songsSlice.actions;
