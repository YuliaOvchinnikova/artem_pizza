import { auth, login, logout } from "./auth";

describe("auth reducer", () => {
  it("should handle initial state", () => {
    expect(auth.reducer(undefined, {})).toEqual({
      name: "",
      password: "",
      authorized: false,
    });
  });

  it("should handle login action", () => {
    const initialState = {
      name: "",
      password: "",
      authorized: false,
    };

    expect(
      auth.reducer(
        initialState,
        login({ name: "testuser", password: "password" })
      )
    ).toEqual({
      name: "testuser",
      password: "password",
      authorized: true,
    });
  });

  it("should handle logout action", () => {
    const initialState = {
      name: "testuser",
      password: "password",
      authorized: true,
    };

    expect(auth.reducer(initialState, logout())).toEqual({
      name: "",
      password: "",
      authorized: false,
    });
  });
});
