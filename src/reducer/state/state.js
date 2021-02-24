import {extend} from "../../utils/common.js";
import {LINKS} from "../../const.js";

const initialState = {
  activeLink: LINKS[0],
  activeTab: `view-1`,
  isErrorPopupShowing: false,
  isContentShowing: true,
  isPlayerShowing: true,
};

const ActionType = {
  SET_ACTIVE_LINK: `SET_ACTIVE_LINK`,
  SET_ACTIVE_TAB: `SET_ACTIVE_TAB`,
  IS_ERROR_POPUP_SHOWING: `IS_ERROR_POPUP_SHOWING`,
  IS_CONTENT_SHOWING: `IS_CONTENT_SHOWING`,
  IS_PLAYER_SHOWING: `IS_PLAYER_SHOWING`,
};

const ActionCreator = {
  setActiveLink: (link) => ({
    type: ActionType.SET_ACTIVE_LINK,
    payload: link,
  }),
  setActiveTab: (tab) => ({
    type: ActionType.SET_ACTIVE_TAB,
    payload: tab,
  }),
  showErrorPopup: (isPopup) => ({
    type: ActionType.IS_ERROR_POPUP_SHOWING,
    payload: isPopup,
  }),
  showContent: (isContent) => ({
    type: ActionType.IS_CONTENT_SHOWING,
    payload: isContent,
  }),
  showPlayer: (isPlayer) => ({
    type: ActionType.IS_PLAYER_SHOWING,
    payload: isPlayer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_LINK:
      return extend(state, {
        activeLink: action.payload,
      });
    case ActionType.SET_ACTIVE_TAB:
      return extend(state, {
        activeTab: action.payload,
      });
    case ActionType.IS_ERROR_POPUP_SHOWING:
      return extend(state, {
        isErrorPopupShowing: action.payload,
      });
    case ActionType.IS_CONTENT_SHOWING:
      return extend(state, {
        isContentShowing: action.payload,
      });
    case ActionType.IS_PLAYER_SHOWING:
      return extend(state, {
        isPlayerShowing: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
