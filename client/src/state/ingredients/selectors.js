export const getIngredients = (state) => {
  if (state.ingredients === "loading") {
    return [];
  }
  return state.ingredients;
};

export const getIngredientsByCategory = (category) => (state) => {
  if (state.ingredients === "loading") {
    return [];
  }
  return state.ingredients.filter((i) => i.category === category);
};

export const getIsLoading = (state) => state.ingredients === "loading";
