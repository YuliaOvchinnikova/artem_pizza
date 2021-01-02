import { getOrders } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrderHistory = createAsyncThunk(
  "orderHistory/fetchOrderHistory",
  async () => {
    return await getOrders();
  }
);
