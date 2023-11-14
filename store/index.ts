import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./ToastSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    toast: toastReducer,
    cart: cartReducer,
  },
});

export default store;
