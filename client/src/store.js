import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ingredients, order, orderHistory, auth } from "./state";
import logger from "redux-logger";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    ingredients: ingredients.reducer,
    order: order.reducer,
    orderHistory: orderHistory.reducer,
    auth: auth.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

// store.subscribe(() => {
//   console.log(store.getState());
// });
