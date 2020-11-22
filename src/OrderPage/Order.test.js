const { render } = require("@testing-library/react");
const { Order } = require("./OrderPage");
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Order", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Order
          pizza={{
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
          }}
        />
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
