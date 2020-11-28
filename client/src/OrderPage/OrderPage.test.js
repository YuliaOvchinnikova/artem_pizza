const { render } = require("@testing-library/react");
import { OrderPage } from "./OrderPage";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { PizzaContext } from "./../PizzaContext";

describe("OrderPage", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const pizza = {
      size: "small",
      dough: "thin",
      sauce: "tomato",
      ingredients: [
        "mozzarella",
        "cheddar",
        "dorblu",
        "tomato",
        "mushrooms",
        "paprika",
        "bacon",
        "pepperoni",
        "ham",
      ],
    };
    const { getByText } = render(
      <Router history={history}>
        <PizzaContext.Provider value={{ pizza }}>
          <OrderPage />
        </PizzaContext.Provider>
      </Router>
    );

    expect(getByText("Size: 30 sm")).toBeInTheDocument();
    expect(getByText("Dough: thin")).toBeInTheDocument();
    expect(getByText("Sauce: tomato sauce")).toBeInTheDocument();
    expect(
      getByText(
        "Toppings: mozzarella, cheddar, dorblu, tomato, mushrooms, paprika, bacon, pepperoni, ham"
      )
    ).toBeInTheDocument();
  });
});
