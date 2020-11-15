const { render } = require("@testing-library/react");
const { Order } = require("./Order");

describe("Order", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Order
        pizza={{
            size: "small",
            dough: "thin",
            sauce: "tomato",
            ingredients: ["mozzarella", "cheddar", "dorblu", "tomato", "mushrooms", "paprika", "bacon", "pepperoni", "ham"],
        }}
      />
    );

    expect(getByText("Size: 30 sm")).toBeInTheDocument()
    expect(getByText("Dough: thin")).toBeInTheDocument()
    expect(getByText("Sauce: tomato sauce")).toBeInTheDocument()
    expect(getByText("Toppings: mozzarella, cheddar, dorblu, tomato, mushrooms, paprika, bacon, pepperoni, ham")).toBeInTheDocument()
  });
});