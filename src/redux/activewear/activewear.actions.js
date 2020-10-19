import { activewearActionTypes } from "./activewear.types";
export const filterActivewear = (filter) => ({
  type: activewearActionTypes.FILTER_ACTIVEWEAR,
  payload: filter,
});
