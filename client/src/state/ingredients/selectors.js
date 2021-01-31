import { INGREDIENTS_SUCCESS } from "./ingredients";

export const getIngredients = (state) => {
  if (state.ingredients.status === INGREDIENTS_SUCCESS) {
    return state.ingredients.ingredients;
  }

  return [];
};

export const getIngredientsByCategory = (category) => (state) => {
  if (state.ingredients.status === INGREDIENTS_SUCCESS) {
    return state.ingredients.ingredients.filter((i) => i.category === category);
  }

  return [];
};

export const getIngredientsStatus = (state) => state.ingredients.status;
