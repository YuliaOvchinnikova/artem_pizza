import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./thunk";

const initialState = { status: "creating", pizza: null, payment: {} };

export const order = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [createOrder.fulfilled]: (state) => {
      state.status = "success";
    },
    [createOrder.pending]: (state) => {
      state.status = "sending";
    },
    [createOrder.rejected]: (state) => {
      state.status = "error";
    },
  },
  reducers: {
    set_pizza: (state, action) => {
      state.status = "creating";
      state.pizza = action.payload;
    },
    set_payment_data: (state, action) => {
      state.status = "creating";
      state.payment = action.payload;
    },
  },
});

const { actions } = order;
export const { set_pizza, set_payment_data } = actions;
