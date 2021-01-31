import { getOrders, getOrderHistoryStatus } from "./selectors";
import {
  INGREDIENTS_SUCCESS,
  INGREDIENTS_LOADING,
  INGREDIENTS_ERROR,
} from "./orderHistory";

describe("orderHistory selectors", () => {
  it("getOrderHistoryStatus returns status", () => {
    const initialState = {
      orderHistory: { status: INGREDIENTS_LOADING, orders: [] },
    };
    expect(getOrderHistoryStatus(initialState)).toEqual(INGREDIENTS_LOADING);
    initialState.orderHistory.status = INGREDIENTS_SUCCESS;
    expect(getOrderHistoryStatus(initialState)).toEqual(INGREDIENTS_SUCCESS);
    initialState.orderHistory.status = INGREDIENTS_ERROR;
    expect(getOrderHistoryStatus(initialState)).toEqual(INGREDIENTS_ERROR);
  });

  it("getOrders returns orders", () => {
    const initialState = {
      orderHistory: {
        status: INGREDIENTS_LOADING,
        orders: [
          {
            id: "JumTwH5o",
            name: "Yulia",
            ingredients: [
              "small",
              "thin",
              "tomato",
              "mozzarella",
              "cheddar",
              "dorblu",
            ],
            address: "street1",
            card_number: "5555 5555 5555 5555",
          },
          {
            id: "atOpwe35",
            name: "Yulia",
            ingredients: [
              "small",
              "thin",
              "tomato",
              "mozzarella",
              "cheddar",
              "dorblu",
            ],
            address: "street1",
            card_number: "5555 5555 5555 5555",
          },
        ],
      },
    };
    expect(getOrders(initialState)).toEqual([]);

    initialState.orderHistory.status = INGREDIENTS_SUCCESS;
    expect(getOrders(initialState)).toEqual([
      {
        id: "JumTwH5o",
        name: "Yulia",
        ingredients: [
          "small",
          "thin",
          "tomato",
          "mozzarella",
          "cheddar",
          "dorblu",
        ],
        address: "street1",
        card_number: "5555 5555 5555 5555",
      },
      {
        id: "atOpwe35",
        name: "Yulia",
        ingredients: [
          "small",
          "thin",
          "tomato",
          "mozzarella",
          "cheddar",
          "dorblu",
        ],
        address: "street1",
        card_number: "5555 5555 5555 5555",
      },
    ]);
    initialState.orderHistory.status = INGREDIENTS_ERROR;
    expect(getOrders(initialState)).toEqual([]);
  });
});
