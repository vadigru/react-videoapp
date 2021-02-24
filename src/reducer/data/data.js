import {extend} from "../../utils/common.js";
import {
  LINKS
} from "../../const.js";

const initialState = {
  links: LINKS,
};

const ActionType = {
  SET_LINKS: `SET_LINKS`,
  RESET_DATA: `RESET_DATA`,
};

const ActionCreator = {
  setLinks: (links) => ({
    type: ActionType.SET_LINKS,
    payload: links,
  }),
  resetData: () => ({
    type: ActionType.RESET_DATA,
    payload: null,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LINKS:
      return extend(state, {
        links: action.payload,
      });
    case ActionType.RESET_DATA:
      return initialState;
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
