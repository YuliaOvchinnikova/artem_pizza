import * as DATA from "./../pizzaData";
import { calculateSum } from "./../calculateSum";
import { Link, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import { getPizza } from "./../state/pizza/selectors";
import { getIngredients } from "./../state/ingredients/selectors";

export const OrderPage = () => {
  const pizza = useSelector(getPizza);
  const data = useSelector(getIngredients);

  if (!pizza) {
    return <Redirect to="/" />;
  }

  const { size, dough, sauce, ingredients } = pizza;
  const sum = calculateSum(pizza, data);
  return (
    <div>
      <h2>Your order </h2> <br />
      <p>Pizza with: </p> <br />
      <ul>
        <li>Size: {DATA.SIZE.find((s) => s.slug === size).name}</li>
        <li>Dough: {DATA.DOUGH.find((d) => d.slug === dough).name}</li>
        <li>Sauce: {data.find((s) => s.slug === sauce).name}</li>
        <li>
          Toppings:{" "}
          {ingredients
            .map((i) => data.find((data_i) => data_i.slug === i).name)
            .join(", ")}
        </li>
      </ul>
      <h3>Order sum: {sum}</h3>
      <Link to="/payment">Payment</Link>
    </div>
  );
};
