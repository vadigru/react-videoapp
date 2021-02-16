import {extend} from "../../utils/common.js";
// import {
//   ALL_GENRES,
//   MOVIES_DEFAULT_AMOUNT,
//   MOVIES_STEP_AMOUNT
// } from "../../const.js";

const initialState = {
  UNAUTHORIZED: false,
};

const ActionType = {
  TOGGLE_AUTH_STATUS: `TOGGLE_AUTH_STATUS`,
};

const ActionCreator = {
  toggleAuthStatus: (auth) => ({
    type: ActionType.TOGGLE_AUTH_STATUS,
    payload: auth,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_AUTH_STATUS:
      return extend(state, {
        UNAUTHORIZED: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
