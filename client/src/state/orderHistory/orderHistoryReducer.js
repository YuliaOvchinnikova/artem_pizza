export const orderHistoryReducer = (state = "loading", action) => {
  switch (action.type) {
    case "orders/success": {
      return action.data;
    }
    case "orders/error": {
      return action.error;
    }
    case "orders/request": {
      return "loading";
    }
    default:
      return state;
  }
};
