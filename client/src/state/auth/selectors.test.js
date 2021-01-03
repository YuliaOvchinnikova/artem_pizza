import { getIsAuthorized } from "./selectors";

describe("auth selectors", () => {
  it("getIsAuthorized return authorized state", () => {
    const initialState = {
      auth: { name: "", password: "", authorized: false },
    };
    expect(getIsAuthorized(initialState)).toEqual(false);
  });
});
