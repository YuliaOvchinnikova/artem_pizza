export const getOrders = (state) => {
  if (state.orderHistory === "loading") {
    return [];
  }
  return state.orderHistory;
};

export const getIsLoading = (state) => state.orderHistory === "loading";
