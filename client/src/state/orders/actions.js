export const requestOrders = () => ({
  type: "orders/request",
});

export const ordersSuccess = (data) => ({
  type: "orders/success",
  data,
});

export const ordersError = (data) => ({
  type: "orders/error",
  data,
});
