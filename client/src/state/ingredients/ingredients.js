import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "./thunk";

const initialState = { status: "loading", ingredients: [] };

export const ingredients = createSlice({
  name: "ingredients",
  initialState,
  extraReducers: {
    [fetchIngredients.fulfilled]: (state, action) => {
      state.status = "success";
      state.ingredients = action.payload;
    },
    [fetchIngredients.pending]: (state, action) => {
      state.status = "loading";
      state.ingredients = [];
    },
    [fetchIngredients.rejected]: (state) => {
      state.status = "error";
      state.ingredients = [];
    },
  },
});
