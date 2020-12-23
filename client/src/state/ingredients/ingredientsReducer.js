export const ingredientsReducer = (state = "loading", action) => {
  switch (action.type) {
    case "ingredients/success": {
      return action.data;
    }
    case "ingredients/error": {
      return action.error;
    }
    case "ingredients/request": {
      return "loading";
    }
    default:
      return state;
  }
};
