import Namespace from "../namespace.js";

export const getAuthStatus = (state) => {
  return state[Namespace.STATE].unauthorized;
};

export const getLinks = (state) => {
  return state[Namespace.STATE].links;
};

export const getActiveLink = (state) => {
  return state[Namespace.STATE].activeLink;
};
