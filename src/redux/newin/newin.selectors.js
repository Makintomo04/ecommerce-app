import { createSelector } from "reselect";

const selectNewIn = (state) => state.newin;

export const selectNewInCollection = createSelector(
  [selectNewIn],
  (newin) => newin.directory
);
export const selectAllNewInItems = createSelector(
  [selectNewInCollection],
  (directory) => directory[0].items
);

export const selectMensNewIn = createSelector(
  [selectNewInCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "mens")
);
export const selectWomensNewIn = createSelector(
  [selectNewInCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "womens")
);
