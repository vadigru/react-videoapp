import Namespace from "../namespace.js";

export const getAuthStatus = (state) => {
  return state[Namespace.STATE].UNAUTHORIZED;
};

export const getActiveLink = (state) => {
  return state[Namespace.STATE].activeLink;
};
