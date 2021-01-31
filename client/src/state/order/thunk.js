import { createNewOrder } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async ({ pizza, payment }) => {
    const order = {
      size: pizza.size === "size_small" ? "30" : "35",
      dough: pizza.dough,
      sauce: pizza.sauce,
      ingredients: pizza.ingredients,
      address: payment.address,
      name: payment.name,
      card_number: payment.cardNumber,
      price: payment.price,
    };
    await createNewOrder(order);
  }
);
