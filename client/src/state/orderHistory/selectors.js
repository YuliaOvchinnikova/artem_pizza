import { INGREDIENTS_SUCCESS } from "./orderHistory";

export const getOrders = (state) => {
  if (state.orderHistory.status === INGREDIENTS_SUCCESS) {
    return state.orderHistory.orders;
  }
  return [];
};

export const getOrderHistoryStatus = (state) => state.orderHistory.status;
