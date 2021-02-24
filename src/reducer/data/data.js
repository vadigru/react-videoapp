import {extend} from "../../utils/common.js";
import {
  LINKS
} from "../../const.js";

const initialState = {
  links: LINKS,
};

const ActionType = {
  SET_LINKS: `SET_LINKS`,
};

const ActionCreator = {
  setLinks: (links) => ({
    type: ActionType.SET_LINKS,
    payload: links,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LINKS:
      return extend(state, {
        links: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
