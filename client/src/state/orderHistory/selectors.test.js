import { getOrders, getOrderHistoryStatus } from "./selectors";

describe("orderHistory selectors", () => {
  it("getOrderHistoryStatus returns status", () => {
    const initialState = {
      orderHistory: { status: "loading", orders: [] },
    };
    expect(getOrderHistoryStatus(initialState)).toEqual("loading");
    initialState.orderHistory.status = "success";
    expect(getOrderHistoryStatus(initialState)).toEqual("success");
    initialState.orderHistory.status = "error";
    expect(getOrderHistoryStatus(initialState)).toEqual("error");
  });

  it("getOrders returns orders", () => {
    const initialState = {
      orderHistory: {
        status: "loading",
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

    initialState.orderHistory.status = "success";
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
    initialState.orderHistory.status = "error";
    expect(getOrders(initialState)).toEqual([]);
  });
});
