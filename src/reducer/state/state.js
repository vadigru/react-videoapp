import {extend} from "../../utils/common.js";
import {
  LINKS
} from "../../const.js";

const initialState = {
  UNAUTHORIZED: false,
  activeLink: LINKS[0]
};

const ActionType = {
  TOGGLE_AUTH_STATUS: `TOGGLE_AUTH_STATUS`,
  TOGGLE_ACTIVE_LINK: `TOGGLE_ACTIVE_LINK`
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_AUTH_STATUS:
      return extend(state, {
        UNAUTHORIZED: action.payload,
      });
    case ActionType.TOGGLE_ACTIVE_LINK:
      return extend(state, {
        activeLink: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
