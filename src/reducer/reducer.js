import {combineReducers} from "redux";
import {reducer as state} from "./state/state.js";
import Namespace from "./namespace.js";

export default combineReducers({
  [Namespace.STATE]: state,
});
