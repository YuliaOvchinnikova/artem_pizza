import {
  getIngredients,
  getIngredientsByCategory,
  getIngredientsStatus,
} from "./selectors";
import {
  INGREDIENTS_SUCCESS,
  INGREDIENTS_LOADING,
  INGREDIENTS_ERROR,
} from "./ingredients";

describe("ingredients selectors", () => {
  it("getIngredientsStatus returns status", () => {
    const initialState = {
      ingredients: { status: INGREDIENTS_LOADING, ingredients: [] },
    };
    expect(getIngredientsStatus(initialState)).toEqual(INGREDIENTS_LOADING);
    initialState.ingredients.status = INGREDIENTS_SUCCESS;
    expect(getIngredientsStatus(initialState)).toEqual(INGREDIENTS_SUCCESS);
    initialState.ingredients.status = INGREDIENTS_ERROR;
    expect(getIngredientsStatus(initialState)).toEqual(INGREDIENTS_ERROR);
  });

  it("getIngredients returns status", () => {
    const initialState = {
      ingredients: {
        status: INGREDIENTS_LOADING,
        ingredients: [
          { name: "in1", category: "test" },
          { name: "in2", category: "test1" },
          { name: "in3", category: "test" },
        ],
      },
    };
    expect(getIngredients(initialState)).toEqual([]);
    initialState.ingredients.status = INGREDIENTS_SUCCESS;
    expect(getIngredients(initialState)).toEqual([
      { name: "in1", category: "test" },
      { name: "in2", category: "test1" },
      { name: "in3", category: "test" },
    ]);
    initialState.ingredients.status = INGREDIENTS_ERROR;
    expect(getIngredients(initialState)).toEqual([]);
  });

  it("getIngredientsByCategory returns status", () => {
    const initialState = {
      ingredients: {
        status: INGREDIENTS_LOADING,
        ingredients: [
          { name: "in1", category: "test" },
          { name: "in2", category: "test1" },
          { name: "in3", category: "test" },
        ],
      },
    };
    expect(getIngredientsByCategory("test")(initialState)).toEqual([]);
    initialState.ingredients.status = INGREDIENTS_SUCCESS;
    expect(getIngredientsByCategory("test")(initialState)).toEqual([
      { name: "in1", category: "test" },
      { name: "in3", category: "test" },
    ]);
    expect(getIngredientsByCategory("test1")(initialState)).toEqual([
      { name: "in2", category: "test1" },
    ]);
    initialState.ingredients.status = INGREDIENTS_ERROR;
    expect(getIngredientsByCategory("test")(initialState)).toEqual([]);
  });
});
