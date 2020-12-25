export const setPizza = (data) => ({
  type: "order/set_pizza",
  data,
});

export const setPaymentData = (data) => ({
  type: "order/set_payment_data",
  data,
});

export const requestOrder = () => ({
  type: "order/request",
});

export const orderSuccess = () => ({
  type: "order/success",
});

export const orderError = () => ({
  type: "order/error",
});
