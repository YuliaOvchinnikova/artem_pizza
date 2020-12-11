const PORT = "3001";

export const createNewOrder = async (data) => {
  return await fetch(`http://localhost:${PORT}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export const getOrders = async () => {
  return await fetch(`http://localhost:${PORT}/orders`).then((res) =>
    res.json()
  );
};

//new
export const getIngredients = async () => {
  return await fetch(`http://localhost:${PORT}/ingredients`).then((res) =>
    res.json()
  );
};
