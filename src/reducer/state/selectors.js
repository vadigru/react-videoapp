import Namespace from "../namespace.js";

export const getActiveLink = (state) => {
  return state[Namespace.STATE].activeLink;
};

export const getActiveTab = (state) => {
  return state[Namespace.STATE].activeTab;
};

export const getErrorPopup = (state) => {
  return state[Namespace.STATE].isErrorPopupShowing;
};

export const getShowingContent = (state) => {
  return state[Namespace.STATE].isContentShowing;
};

export const getShowingPlayer = (state) => {
  return state[Namespace.STATE].isPlayerShowing;
};
