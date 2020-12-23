export const requestIngredients = () => ({
  type: "ingredients/request",
});

export const ingredientsSuccess = (data) => ({
  type: "ingredients/success",
  data,
});

export const ingredientsError = (data) => ({
  type: "ingredients/error",
  data,
});
