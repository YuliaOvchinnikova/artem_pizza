const ADDRESS = "https://jcmvi.sse.codesandbox.io";

export const createNewOrder = async (data) => {
  return await fetch(`${ADDRESS}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export const getOrders = async () => {
  return await fetch(`${ADDRESS}/orders`).then((res) => res.json());
};

//new
export const getIngredients = async () => {
  return await fetch(`${ADDRESS}/ingredients`).then((res) => res.json());
};
