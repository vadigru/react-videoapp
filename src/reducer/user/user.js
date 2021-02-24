import {extend} from "../../utils/common.js";

const initialState = {
  unauthorized: false,
};

const ActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
};

const ActionCreator = {
  setAuthStatus: (auth) => ({
    type: ActionType.SET_AUTH_STATUS,
    payload: auth,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS:
      return extend(state, {
        unauthorized: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
