import {extend} from "../../utils/common.js";
import {
  LINKS
} from "../../const.js";

const initialState = {
  unauthorized: false,
  links: LINKS,
  activeLink: LINKS[0]
};

const ActionType = {
  TOGGLE_AUTH_STATUS: `TOGGLE_AUTH_STATUS`,
  TOGGLE_ACTIVE_LINK: `TOGGLE_ACTIVE_LINK`,
  SET_LINKS: `SET_LINKS`
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
  setLinks: (links) => ({
    type: ActionType.SET_LINKS,
    payload: links,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_AUTH_STATUS:
      return extend(state, {
        unauthorized: action.payload,
      });
    case ActionType.TOGGLE_ACTIVE_LINK:
      return extend(state, {
        activeLink: action.payload,
      });
    case ActionType.SET_LINKS:
      return extend(state, {
        links: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
