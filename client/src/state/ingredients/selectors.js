export const getIngredients = (state) => {
  return state.ingredients.ingredients;
};

export const getIngredientsByCategory = (category) => (state) => {
  return state.ingredients.ingredients.filter((i) => i.category === category);
};

export const getIngredientsStatus = (state) => state.ingredients.status;
