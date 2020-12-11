import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddIngredient">Add ingredient</Link>
          </li>
          <li>
            <Link to="/ingredientList">Ingredient List</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
