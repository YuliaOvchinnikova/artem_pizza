import { ingredients } from "./ingredients";

describe("ingredients reducer", () => {
  it("should handle initial state", () => {
    expect(ingredients.reducer(undefined, {})).toEqual({
      status: "loading",
      ingredients: [],
    });
  });
});
