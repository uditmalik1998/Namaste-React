import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRestaurantItemCard } from "../src/components/atoms/RestaurantItemCard";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: any, action: PayloadAction<IRestaurantItemCard>) => {
      state.cartItems = [...state.cartItems, { ...action.payload, qty: 1 }];
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
