import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderHistory } from "./thunk";

const initialState = { status: "loading", orders: [] };

export const orderHistory = createSlice({
  name: "orderHistory",
  initialState,
  extraReducers: {
    [fetchOrderHistory.fulfilled]: (state, action) => {
      state.status = "success";
      state.orders = action.payload;
    },
    [fetchOrderHistory.pending]: (state) => {
      state.status = "loading";
      state.orders = [];
    },
    [fetchOrderHistory.rejected]: (state) => {
      state.status = "error";
      state.orders = [];
    },
  },
});
