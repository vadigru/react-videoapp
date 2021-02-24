import Namespace from "../namespace.js";

export const getAuthStatus = (state) => {
  return state[Namespace.USER].unauthorized;
};
