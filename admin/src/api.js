const PORT = "3001";

export const createIngredient = async (data) => {
  return await fetch(`http://localhost:${PORT}/ingredients`, {
    method: "POST",
    body: data,
  }).then((response) => response.json());
};

export const getIngredientList = async () => {
  return await fetch(`http://localhost:${PORT}/ingredients`).then((res) =>
    res.json()
  );
};

export const deleteIngredient = async (id) => {
  return await fetch(`http://localhost:${PORT}/ingredients/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const getIngredient = async (id) => {
  return await fetch(`http://localhost:${PORT}/ingredients/${id}`).then((res) =>
    res.json()
  );
};

export const updateIngredient = async (id, data) => {
  return await fetch(`http://localhost:${PORT}/ingredients/${id}`, {
    method: "PUT",
    body: data,
  }).then((res) => res.json());
};
