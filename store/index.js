import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Slices/dictionarySlice";

const store = configureStore({
  reducer: {
    dictionary: Reducer,
  },
});

export default store;
