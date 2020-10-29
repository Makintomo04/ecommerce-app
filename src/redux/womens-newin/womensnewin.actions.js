import { newinActionTypes } from "./womensnewin.types";
export const filterNewin = (filter) => ({
  type: newinActionTypes.FILTER_NEWIN,
  payload: filter,
});
