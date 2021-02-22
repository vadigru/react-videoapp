import Namespace from "../namespace.js";

export const getActiveLink = (state) => {
  return state[Namespace.STATE].activeLink;
};

export const getLinks = (state) => {
  return state[Namespace.STATE].links;
};

export const getAuthStatus = (state) => {
  return state[Namespace.STATE].unauthorized;
};

export const getErrorPopupStatus = (state) => {
  return state[Namespace.STATE].showErrorPopup;
};
