import * as DATA from "./../pizzaData";
import { calculateSum } from "./../calculateSum";
import { Link, Redirect } from "react-router-dom";
import { usePizza } from "./../PizzaContext";

export const OrderPage = () => {
  const { pizza } = usePizza();

  if (!pizza) {
    return <Redirect to="/" />;
  }

  const { size, dough, sauce, ingredients } = pizza;
  const sum = calculateSum(pizza);
  return (
    <div>
      <h2>Your order </h2> <br />
      <p>Pizza with: </p> <br />
      <ul>
        <li>Size: {DATA.SIZE[size].name}</li>
        <li>Dough: {DATA.DOUGH[dough].name}</li>
        <li>Sauce: {DATA.SAUCE[sauce].name}</li>
        <li>
          Toppings:{" "}
          {ingredients.map((i) => DATA.INGREDIENTS[i].name).join(", ")}
        </li>
      </ul>
      <h3>Order sum: {sum}</h3>
      <Link to="/payment">Payment</Link>
    </div>
  );
};
