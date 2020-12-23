import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ingredientsReducer } from "./state/ingredients/ingredientsReducer";
import { pizzaReducer } from "./state/pizza/pizzaReducer";
import { ordersReducer } from "./state/orders/ordersReducer";
import { authReducer } from "./state/auth/authReducer";

export const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizza: pizzaReducer,
    orders: ordersReducer,
    auth: authReducer,
  }),
  applyMiddleware(thunk)
);
