import { getOrderPizza, getOrderPayment, getOrderStatus } from "./selectors";

describe("order selectors", () => {
  it("getOrderStatus returns status", () => {
    const initialState = {
      order: { status: "creating", pizza: {}, payment: {} },
    };
    expect(getOrderStatus(initialState)).toEqual("creating");

    initialState.order.status = "success";
    expect(getOrderStatus(initialState)).toEqual("success");
    initialState.order.status = "error";
    expect(getOrderStatus(initialState)).toEqual("error");
    initialState.order.status = "sending";
    expect(getOrderStatus(initialState)).toEqual("sending");
  });

  it("getOrderPizza returns pizza", () => {
    const initialState = {
      order: {
        status: "creating",
        pizza: { size: "small", dough: "thick", sauce: "hot" },
        payment: {},
      },
    };
    expect(getOrderPizza(initialState)).toEqual({
      size: "small",
      dough: "thick",
      sauce: "hot",
    });
  });

  it("getOrderPayment returns payment", () => {
    const initialState = {
      order: {
        status: "creating",
        pizza: { size: "small", dough: "thick", sauce: "hot" },
        payment: {
          cardNumber: "4444444444444444",
          name: "yulia",
          address: "Katu1",
        },
      },
    };
    expect(getOrderPayment(initialState)).toEqual({
      cardNumber: "4444444444444444",
      name: "yulia",
      address: "Katu1",
    });
  });
});
