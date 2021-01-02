import { createNewOrder } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async ({ pizza, paymentData }) => {
    const order = {
      ingredients: [pizza.size, pizza.dough, pizza.sauce, ...pizza.ingredients],
      address: paymentData.address,
      name: paymentData.name,
      card_number: paymentData.cardNumber,
    };
    await createNewOrder(order);
  }
);
