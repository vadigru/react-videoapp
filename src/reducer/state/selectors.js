import Namespace from "../namespace.js";

export const getActiveLink = (state) => {
  return state[Namespace.STATE].activeLink;
};

export const getActiveTab = (state) => {
  return state[Namespace.STATE].activeTab;
};

export const getLinks = (state) => {
  return state[Namespace.STATE].links;
};

export const getErrorPopup = (state) => {
  return state[Namespace.STATE].showErrorPopup;
};

export const getShowContent = (state) => {
  return state[Namespace.STATE].showContent;
};

export const getShowPlayer = (state) => {
  return state[Namespace.STATE].showPlayer;
};

export const getAuthStatus = (state) => {
  return state[Namespace.STATE].unauthorized;
};
