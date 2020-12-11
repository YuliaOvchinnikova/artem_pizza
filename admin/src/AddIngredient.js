import { createIngredient } from "./api";
import React, { useRef } from "react";

export const AddIngredient = () => {
  const form = useRef(null);

  const onSubmit = async () => {
    const formData = new FormData(form.current);
    await createIngredient(formData);
  };
  return (
    <form ref={form} onSubmit={onSubmit}>
      <h2>Add new ingredient</h2>
      <select id="category" type="text" name="category">
        <option>Sauce</option>
        <option>Cheese</option>
        <option>Vegetables</option>
        <option>Meat</option>
      </select>

      <div>
        <label htmlFor="price">Price:</label>
        <input id="price" type="tel" name="price" />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" />
      </div>
      <div>
        <label htmlFor="slug">Slug:</label>
        <input id="slug" type="text" name="slug" />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input id="image" type="file" name="image" />
      </div>
      <button>Add ingredient</button>
    </form>
  );
};
