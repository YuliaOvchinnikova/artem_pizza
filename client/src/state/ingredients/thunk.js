import { getIngredients } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    const ingredients = await getIngredients();
    return ingredients.map((item) => ({
      ...item,
      price: Number(item.price),
    }));
  }
);
