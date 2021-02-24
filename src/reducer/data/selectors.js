import Namespace from "../namespace.js";

export const getLinks = (state) => {
  return state[Namespace.DATA].links;
};
