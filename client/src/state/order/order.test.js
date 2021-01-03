import { order, set_pizza, set_payment_data } from "./order";

describe("order reducer", () => {
  it("should handle initial state", () => {
    expect(order.reducer(undefined, {})).toEqual({
      status: "creating",
      pizza: {},
      payment: {},
    });
  });

  it("should handle set_pizza action", () => {
    const initialState = {
      status: "creating",
      pizza: {},
      payment: {},
    };

    expect(
      order.reducer(
        initialState,
        set_pizza({
          size: "small",
          dough: "thin",
          sauce: "hot",
          ingredients: ["mushrooms", "ham"],
        })
      )
    ).toEqual({
      status: "creating",
      pizza: {
        size: "small",
        dough: "thin",
        sauce: "hot",
        ingredients: ["mushrooms", "ham"],
      },
      payment: {},
    });
  });

  it("should handle set_payment_data action", () => {
    const initialState = {
      status: "creating",
      pizza: {
        size: "small",
        dough: "thin",
        sauce: "hot",
        ingredients: ["mushrooms", "ham"],
      },
      payment: {},
    };

    expect(
      order.reducer(
        initialState,
        set_payment_data({
          cardNumber: "4444444444444444",
          name: "yulia",
          address: "Katu1",
        })
      )
    ).toEqual({
      status: "creating",
      pizza: {
        size: "small",
        dough: "thin",
        sauce: "hot",
        ingredients: ["mushrooms", "ham"],
      },
      payment: {
        cardNumber: "4444444444444444",
        name: "yulia",
        address: "Katu1",
      },
    });
  });
});
