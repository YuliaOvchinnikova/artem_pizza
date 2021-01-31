import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderHistory } from "./thunk";

export const INGREDIENTS_SUCCESS = "success";
export const INGREDIENTS_LOADING = "loading";
export const INGREDIENTS_ERROR = "error";

const initialState = { status: INGREDIENTS_LOADING, orders: [] };

export const orderHistory = createSlice({
  name: "orderHistory",
  initialState,
  extraReducers: {
    [fetchOrderHistory.fulfilled]: (state, action) => {
      state.status = INGREDIENTS_SUCCESS;
      state.orders = action.payload;
    },
    [fetchOrderHistory.pending]: (state) => {
      state.status = INGREDIENTS_LOADING;
      state.orders = [];
    },
    [fetchOrderHistory.rejected]: (state) => {
      state.status = INGREDIENTS_ERROR;
      state.orders = [];
    },
  },
});
