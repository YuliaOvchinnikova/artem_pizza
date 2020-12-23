export const authLogin = (name, password) => ({
  type: "auth/login",
  name,
  password,
});

export const authLogout = () => ({
  type: "auth/logout",
});
