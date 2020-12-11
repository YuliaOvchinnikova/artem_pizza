import { useRouteMatch, Redirect } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getIngredient, deleteIngredient, updateIngredient } from "./api";

export const Ingredient = () => {
  const match = useRouteMatch();
  const form = useRef(null);

  const id = match.params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState();
  // Just to update image url when editing the ingredient
  const [imageHash, setImageHash] = useState(Date.now());

  useEffect(() => {
    const loadData = async () => {
      const ingredient = await getIngredient(id);
      setData(ingredient);
      setIsLoading(false);
    };
    loadData();
  }, [id, isLoading]);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (redirect) {
    return <Redirect to="/ingredientList" />;
  }

  const onDelete = async () => {
    await deleteIngredient(id);
    setRedirect(true);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (editing) {
      const formData = new FormData(form.current);
      await updateIngredient(id, formData);
      setImageHash(Date.now());
      setIsLoading(true);
    }
    setEditing(!editing);
  };

  return (
    <>
      <form ref={form} onSubmit={onSubmit}>
        <h2>{data.name}</h2>
        <select
          id="category"
          type="text"
          name="category"
          disabled={!editing}
          defaultValue={data.category}
          required
        >
          <option value="Sauce">Sauce</option>
          <option value="Cheese">Cheese</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
        </select>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="tel"
            name="price"
            defaultValue={data.price}
            disabled={!editing}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            defaultValue={data.name}
            disabled={!editing}
            required
          />
        </div>
        <div>
          <label htmlFor="slug">Slug:</label>
          <input
            id="slug"
            type="text"
            name="slug"
            defaultValue={data.slug}
            disabled={!editing}
            required
          />
        </div>
        {editing ? (
          <div>
            <label htmlFor="image">Image:</label>
            <input id="image" type="file" name="image" required />
          </div>
        ) : (
          <img
            src={`http://localhost:3001/${data.image}?${imageHash}`}
            alt={data.name}
            width="15%"
            height="10%"
          />
        )}
        <div>
          <button>{editing ? "Save" : "Edit"}</button>
        </div>
      </form>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};
