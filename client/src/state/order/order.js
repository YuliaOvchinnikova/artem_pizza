import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./thunk";

export const ORDER_SUCCESS = "success";
export const ORDER_CREATING = "creating";
export const ORDER_SENDING = "sending";
export const ORDER_ERROR = "error";

const initialState = { status: ORDER_CREATING, pizza: null, payment: {} };

export const order = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [createOrder.fulfilled]: (state) => {
      state.status = ORDER_SUCCESS;
    },
    [createOrder.pending]: (state) => {
      state.status = ORDER_SENDING;
    },
    [createOrder.rejected]: (state) => {
      state.status = ORDER_ERROR;
    },
  },
  reducers: {
    set_pizza: (state, action) => {
      state.status = ORDER_CREATING;
      state.pizza = action.payload;
    },
    set_payment_data: (state, action) => {
      state.status = ORDER_CREATING;
      state.payment = action.payload;
    },
  },
});

const { actions } = order;
export const { set_pizza, set_payment_data } = actions;
