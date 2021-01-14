export const getOrders = (state) => {
  if (state.orderHistory.status === "success") {
    return state.orderHistory.orders;
  }
  return [];
};

export const getOrderHistoryStatus = (state) => state.orderHistory.status;
