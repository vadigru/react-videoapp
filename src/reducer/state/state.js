import {extend} from "../../utils/common.js";
import {
  LINKS
} from "../../const.js";

const initialState = {
  activeLink: ``,
  links: [...LINKS],
  showPopup: false,
  unauthorized: false,
};

const ActionType = {
  SET_LINKS: `SET_LINKS`,
  TOGGLE_ACTIVE_LINK: `TOGGLE_ACTIVE_LINK`,
  TOGGLE_AUTH_STATUS: `TOGGLE_AUTH_STATUS`,
  TOGGLE_POPUP: `TOGGLE_POPUP`
};

const ActionCreator = {
  setLinks: (links) => ({
    type: ActionType.SET_LINKS,
    payload: links,
  }),
  toggleAuthStatus: (auth) => ({
    type: ActionType.TOGGLE_AUTH_STATUS,
    payload: auth,
  }),
  toggleActiveLink: (link) => ({
    type: ActionType.TOGGLE_ACTIVE_LINK,
    payload: link,
  }),
  togglePopup: (popup) => ({
    type: ActionType.TOGGLE_POPUP,
    payload: popup,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LINKS:
      return extend(state, {
        links: [...action.payload],
      });
    case ActionType.TOGGLE_AUTH_STATUS:
      return extend(state, {
        unauthorized: action.payload,
      });
    case ActionType.TOGGLE_ACTIVE_LINK:
      return extend(state, {
        activeLink: action.payload,
      });
    case ActionType.TOGGLE_POPUP:
      return extend(state, {
        showPopup: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
