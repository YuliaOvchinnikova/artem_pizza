export const getOrders = (state) => {
  if (state.orders === "loading") {
    return [];
  }
  return state.orders;
};

export const getIsLoading = (state) => state.orders === "loading";
