import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toastProps: { show: false, autohide: true, delay: 3000, toastContent: "" },
  toastHeader: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.toastProps = { ...state.toastProps, ...action.payload };
    },
  },
});

export const { showToast } = toastSlice.actions;
export default toastSlice.reducer;
