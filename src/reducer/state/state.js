import {extend} from "../../utils/common.js";
import {
  LINKS
} from "../../const.js";

const initialState = {
  activeLink: ``,
  activeTab: ``,
  links: LINKS,
  showErrorPopup: false,
  showContent: false,
  showPlayer: false,
  unauthorized: false,
};

const ActionType = {
  TOGGLE_ACTIVE_LINK: `TOGGLE_ACTIVE_LINK`,
  TOGGLE_ACTIVE_TAB: `TOGGLE_ACTIVE_TAB`,
  TOGGLE_AUTH_STATUS: `TOGGLE_AUTH_STATUS`,
  TOGGLE_ERROR_POPUP: `TOGGLE_ERROR_POPUP`,
  TOGGLE_SHOW_CONTENT: `TOGGLE_SHOW_CONTENT`,
  TOGGLE_SHOW_PLAYER: `TOGGLE_SHOW_PLAYER`,
};

const ActionCreator = {
  toggleActiveLink: (link) => ({
    type: ActionType.TOGGLE_ACTIVE_LINK,
    payload: link,
  }),
  toggleActiveTab: (tab) => ({
    type: ActionType.TOGGLE_ACTIVE_TAB,
    payload: tab,
  }),
  toggleAuthStatus: (auth) => ({
    type: ActionType.TOGGLE_AUTH_STATUS,
    payload: auth,
  }),
  toggleErrorPopup: (isPopup) => ({
    type: ActionType.TOGGLE_ERROR_POPUP,
    payload: isPopup,
  }),
  toggleShowContent: (isContent) => ({
    type: ActionType.TOGGLE_SHOW_CONTENT,
    payload: isContent,
  }),
  toggleShowPlayer: (isPlayer) => ({
    type: ActionType.TOGGLE_SHOW_PLAYER,
    payload: isPlayer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_ACTIVE_LINK:
      return extend(state, {
        activeLink: action.payload,
      });
    case ActionType.TOGGLE_ACTIVE_TAB:
      return extend(state, {
        activeTab: action.payload,
      });
    case ActionType.TOGGLE_AUTH_STATUS:
      return extend(state, {
        unauthorized: action.payload,
      });
    case ActionType.TOGGLE_ERROR_POPUP:
      return extend(state, {
        showErrorPopup: action.payload,
      });
    case ActionType.TOGGLE_SHOW_CONTENT:
      return extend(state, {
        showContent: action.payload,
      });
    case ActionType.TOGGLE_SHOW_PLAYER:
      return extend(state, {
        showPlayer: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
