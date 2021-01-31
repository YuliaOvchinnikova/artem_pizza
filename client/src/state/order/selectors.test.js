import { getOrderPizza, getOrderPayment, getOrderStatus } from "./selectors";
import {
  ORDER_SUCCESS,
  ORDER_SENDING,
  ORDER_ERROR,
  ORDER_CREATING,
} from "./order";

describe("order selectors", () => {
  it("getOrderStatus returns status", () => {
    const initialState = {
      order: { status: ORDER_CREATING, pizza: {}, payment: {} },
    };
    expect(getOrderStatus(initialState)).toEqual(ORDER_CREATING);

    initialState.order.status = ORDER_SUCCESS;
    expect(getOrderStatus(initialState)).toEqual(ORDER_SUCCESS);
    initialState.order.status = ORDER_ERROR;
    expect(getOrderStatus(initialState)).toEqual(ORDER_ERROR);
    initialState.order.status = ORDER_SENDING;
    expect(getOrderStatus(initialState)).toEqual(ORDER_SENDING);
  });

  it("getOrderPizza returns pizza", () => {
    const initialState = {
      order: {
        status: ORDER_CREATING,
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
        status: ORDER_CREATING,
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
