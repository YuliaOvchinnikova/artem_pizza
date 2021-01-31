import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "./thunk";

export const INGREDIENTS_SUCCESS = "success";
export const INGREDIENTS_LOADING = "loading";
export const INGREDIENTS_ERROR = "error";

const initialState = { status: INGREDIENTS_LOADING, ingredients: [] };

export const ingredients = createSlice({
  name: "ingredients",
  initialState,
  extraReducers: {
    [fetchIngredients.fulfilled]: (state, action) => {
      state.status = INGREDIENTS_SUCCESS;
      state.ingredients = action.payload;
    },
    [fetchIngredients.pending]: (state, action) => {
      state.status = INGREDIENTS_LOADING;
      state.ingredients = [];
    },
    [fetchIngredients.rejected]: (state) => {
      state.status = INGREDIENTS_ERROR;
      state.ingredients = [];
    },
  },
});
