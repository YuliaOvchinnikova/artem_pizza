import {
  getIngredients,
  getIngredientsByCategory,
  getIngredientsStatus,
} from "./selectors";

describe("ingredients selectors", () => {
  it("getIngredientsStatus returns status", () => {
    const initialState = {
      ingredients: { status: "loading", ingredients: [] },
    };
    expect(getIngredientsStatus(initialState)).toEqual("loading");
    initialState.ingredients.status = "success";
    expect(getIngredientsStatus(initialState)).toEqual("success");
    initialState.ingredients.status = "error";
    expect(getIngredientsStatus(initialState)).toEqual("error");
  });

  it("getIngredients returns status", () => {
    const initialState = {
      ingredients: {
        status: "loading",
        ingredients: [
          { name: "in1", category: "test" },
          { name: "in2", category: "test1" },
          { name: "in3", category: "test" },
        ],
      },
    };
    expect(getIngredients(initialState)).toEqual([]);
    initialState.ingredients.status = "success";
    expect(getIngredients(initialState)).toEqual([
      { name: "in1", category: "test" },
      { name: "in2", category: "test1" },
      { name: "in3", category: "test" },
    ]);
    initialState.ingredients.status = "error";
    expect(getIngredients(initialState)).toEqual([]);
  });

  it("getIngredientsByCategory returns status", () => {
    const initialState = {
      ingredients: {
        status: "loading",
        ingredients: [
          { name: "in1", category: "test" },
          { name: "in2", category: "test1" },
          { name: "in3", category: "test" },
        ],
      },
    };
    expect(getIngredientsByCategory("test")(initialState)).toEqual([]);
    initialState.ingredients.status = "success";
    expect(getIngredientsByCategory("test")(initialState)).toEqual([
      { name: "in1", category: "test" },
      { name: "in3", category: "test" },
    ]);
    expect(getIngredientsByCategory("test1")(initialState)).toEqual([
      { name: "in2", category: "test1" },
    ]);
    initialState.ingredients.status = "error";
    expect(getIngredientsByCategory("test")(initialState)).toEqual([]);
  });
});
