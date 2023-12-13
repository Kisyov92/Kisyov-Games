import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
  name: "options",
  initialState: {
    cols: 4,
    cards: 6,
  },
  reducers: {
    changeLevel(state, action) {
      state.cols = action.payload.cols;
      state.cards = action.payload.cards;
    },
  },
});

export const optionsAction = optionsSlice.actions;

export default optionsSlice.reducer;
