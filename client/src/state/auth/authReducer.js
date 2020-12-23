export const authReducer = (state = false, action) => {
  switch (action.type) {
    case "auth/login": {
      return { name: action.name, password: action.password };
    }
    case "auth/logout": {
      return false;
    }
    default:
      return state;
  }
};
