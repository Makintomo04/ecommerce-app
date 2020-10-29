import { newinActionTypes } from "./newin.types";
export const filterNewin = (filter) => ({
  type: newinActionTypes.FILTER_NEWIN,
  payload: filter,
});
