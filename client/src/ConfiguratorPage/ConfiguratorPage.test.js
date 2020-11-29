const { fireEvent, render } = require("@testing-library/react");
const { ConfiguratorPage } = require("./ConfiguratorPage");
import { PizzaProvider, PizzaContext } from "./../PizzaContext";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("ConfiguratorPage", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <PizzaProvider>
        <ConfiguratorPage />
      </PizzaProvider>
    );
    expect(getByText("Choose size:")).toBeInTheDocument();
  });

  describe("with large size selected", () => {
    it("shows correct sum", () => {
      const { getByText } = render(
        <PizzaProvider>
          <ConfiguratorPage />
        </PizzaProvider>
      );

      fireEvent.click(getByText("35 sm"));

      expect(getByText("Your order: 250 RUB")).toBeInTheDocument();
    });
  });

  describe("with thick dough selected", () => {
    it("shows correct sum", () => {
      const { getByText } = render(
        <PizzaProvider>
          <ConfiguratorPage />
        </PizzaProvider>
      );

      fireEvent.click(getByText("thick"));

      expect(getByText("Your order: 200 RUB")).toBeInTheDocument();
    });
  });

  describe("with hot sauce selected", () => {
    it("shows correct sum", () => {
      const { getByText } = render(
        <PizzaProvider>
          <ConfiguratorPage />
        </PizzaProvider>
      );

      fireEvent.click(getByText("hot sauce"));

      expect(getByText("Your order: 200 RUB")).toBeInTheDocument();
    });
  });

  describe("with all toppings checked", () => {
    it("shows maximum sum", () => {
      const { getByText } = render(
        <PizzaProvider>
          <ConfiguratorPage />
        </PizzaProvider>
      );

      fireEvent.click(getByText("mozzarella"));
      fireEvent.click(getByText("cheddar"));
      fireEvent.click(getByText("dorblu"));

      fireEvent.click(getByText("tomato"));
      fireEvent.click(getByText("mushrooms"));
      fireEvent.click(getByText("paprika"));

      fireEvent.click(getByText("bacon"));
      fireEvent.click(getByText("pepperoni"));
      fireEvent.click(getByText("ham"));

      expect(getByText("Your order: 461 RUB")).toBeInTheDocument();
    });
  });

  describe("on pizza submit", () => {
    it("passes constructed pizza", async () => {
      const history = createMemoryHistory();
      const setPizza = jest.fn();
      const { getByText } = render(
        <Router history={history}>
          <PizzaContext.Provider value={{ setPizza }}>
            <ConfiguratorPage />
          </PizzaContext.Provider>
        </Router>
      );

      fireEvent.click(getByText("35 sm"));
      fireEvent.click(getByText("thin"));
      fireEvent.click(getByText("hot sauce"));

      fireEvent.click(getByText("cheddar"));
      fireEvent.click(getByText("dorblu"));

      fireEvent.click(getByText("tomato"));
      fireEvent.click(getByText("mushrooms"));
      fireEvent.click(getByText("paprika"));

      fireEvent.click(getByText("bacon"));

      await act(async () => {
        fireEvent.click(getByText("Your order: 424 RUB"));
      });

      expect(setPizza).toBeCalledWith({
        dough: "thin",
        ingredients: [
          "cheddar",
          "dorblu",
          "tomato",
          "mushrooms",
          "paprika",
          "bacon",
        ],
        sauce: "hot",
        size: "large",
      });
      expect(history.location.pathname).toEqual("/order");
    });
  });
});
