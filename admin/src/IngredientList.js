import { useState, useEffect } from "react";
import { getIngredientList } from "./api";
import { Link } from "react-router-dom";

export const IngredientList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const loadData = async () => {
    const list = await getIngredientList();
    setData(list);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>Ingredient List</h1>
      <ul>
        {data
          .filter((ingredient) => ingredient.name !== undefined)
          .map((ingredient) => (
            <li key={ingredient.id}>
              <Link to={`/ingredientList/${ingredient.id}`}>
                {ingredient.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
