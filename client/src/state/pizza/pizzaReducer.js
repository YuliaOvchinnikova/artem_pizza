export const pizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "pizza/set_pizza": {
      return action.data;
    }
    default:
      return state;
  }
};
