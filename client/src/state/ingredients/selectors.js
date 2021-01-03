export const getIngredients = (state) => {
  if (state.ingredients.status === "success") {
    return state.ingredients.ingredients;
  }

  return [];
};

export const getIngredientsByCategory = (category) => (state) => {
  if (state.ingredients.status === "success") {
    return state.ingredients.ingredients.filter((i) => i.category === category);
  }

  return [];
};

export const getIngredientsStatus = (state) => state.ingredients.status;
