export const getOrders = (state) => {
  return state.orderHistory.orders;
};

export const getOrderHistoryStatus = (state) => state.orderHistory.status;
