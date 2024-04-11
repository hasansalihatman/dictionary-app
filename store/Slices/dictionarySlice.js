import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "dictionary",
  initialState: [
    {
      en: "Computer",
      tr: "Bilgisayar",
    },
    {
      en: "Chair",
      tr: "Sandalye",
    },
  ],
  reducers: {
    add(state, action) {
      const word = action.payload;
      state.push(word);
    },
  },
});

export const { add } = Slice.actions;
export const Reducer = Slice.reducer;
