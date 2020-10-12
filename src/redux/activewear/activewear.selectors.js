import { createSelector } from "reselect";

const selectActivewear = (state) => state.activewear;

export const selectActivewearCollection = createSelector(
  [selectActivewear],
  (activewear) => activewear.directory
);
export const selectAllActivewearItems = createSelector(
  [selectActivewearCollection],
  (directory) => directory[0].items
);

export const selectMensActivewear = createSelector(
  [selectActivewearCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "mens")
);
export const selectWomensActivewear = createSelector(
  [selectActivewearCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "womens")
);
