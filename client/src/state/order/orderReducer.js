export const orderReducer = (state = { state: "creating" }, action) => {
  switch (action.type) {
    case "order/set_pizza": {
      return { ...state, pizza: action.data, state: "creating" };
    }
    case "order/set_payment_data": {
      return { ...state, paymentData: action.data, state: "creating" };
    }
    case "order/request": {
      return { ...state, state: "sending" };
    }
    case "order/success": {
      return { ...state, state: "success" };
    }
    case "order/error": {
      return { ...state, state: "error" };
    }
    default:
      return state;
  }
};
