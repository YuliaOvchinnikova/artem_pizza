import { orderHistory } from "./orderHistory";

describe("orderHistory reducer", () => {
  it("should handle initial state", () => {
    expect(orderHistory.reducer(undefined, {})).toEqual({
      status: "loading",
      orders: [],
    });
  });
});
