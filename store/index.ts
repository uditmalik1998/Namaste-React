import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./Toast/ToastSlice";

const store = configureStore({
  reducer: {
    toast: toastReducer,
  },
});

export default store;
