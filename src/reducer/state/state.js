import {extend} from "../../utils/common.js";
import {
  LINKS
} from "../../const.js";

const initialState = {
  activeLink: ``,
  activeTab: ``,
  links: LINKS,
  showErrorPopup: false,
  unauthorized: false,
};

const ActionType = {
  TOGGLE_ACTIVE_LINK: `TOGGLE_ACTIVE_LINK`,
  TOGGLE_ACTIVE_TAB: `TOGGLE_ACTIVE_TAB`,
  TOGGLE_AUTH_STATUS: `TOGGLE_AUTH_STATUS`,
  SHOW_ERROR_POPUP: `SHOW_ERROR_POPUP`
};

const ActionCreator = {
  toggleAuthStatus: (auth) => ({
    type: ActionType.TOGGLE_AUTH_STATUS,
    payload: auth,
  }),
  toggleActiveLink: (link) => ({
    type: ActionType.TOGGLE_ACTIVE_LINK,
    payload: link,
  }),
  toggleActiveTab: (tab) => ({
    type: ActionType.TOGGLE_ACTIVE_TAB,
    payload: tab,
  }),
  toggleErrorPopupStatus: (popup) => ({
    type: ActionType.SHOW_ERROR_POPUP,
    payload: popup,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_ERROR_POPUP:
      return extend(state, {
        showErrorPopup: action.payload,
      });
    case ActionType.TOGGLE_AUTH_STATUS:
      return extend(state, {
        unauthorized: action.payload,
      });
    case ActionType.TOGGLE_ACTIVE_LINK:
      return extend(state, {
        activeLink: action.payload,
      });
    case ActionType.TOGGLE_ACTIVE_TAB:
      return extend(state, {
        activeTab: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
