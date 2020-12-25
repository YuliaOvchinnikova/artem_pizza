import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ingredientsReducer } from "./state/ingredients/ingredientsReducer";
import { orderReducer } from "./state/order/orderReducer";
import { orderHistoryReducer } from "./state/orderHistory/orderHistoryReducer";
import { authReducer } from "./state/auth/authReducer";

export const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    orderHistory: orderHistoryReducer,
    auth: authReducer,
  }),
  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   console.log(store.getState());
// });
