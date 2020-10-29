import { createSelector } from "reselect";

const selectWomensNewIn = (state) => state.womensnewin;

export const selectWomensNewInCollection = createSelector(
  [selectWomensNewIn],
  (newin) => newin.directory
);
export const selectAllNewInItems = createSelector(
  [selectWomensNewInCollection],
  (directory) => directory[0].items
);
