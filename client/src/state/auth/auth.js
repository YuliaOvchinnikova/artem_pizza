import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", password: "", authorized: false };

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.authorized = true;
    },
    logout: (state) => {
      state.name = "";
      state.password = "";
      state.authorized = false;
    },
  },
});
const { actions } = auth;
export const { login, logout } = actions;
