import { createSelector } from "reselect";

const selectAccessories = (state) => state.accessories;

export const selectAccessoriesCollection = createSelector(
  [selectAccessories],
  (accessories) => accessories.directory
);
export const selectAllAccessoryItems = createSelector(
  [selectAccessoriesCollection],
  (directory) => directory[0].items
);

export const selectMensAccessories = createSelector(
  [selectAccessoriesCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "mens")
);
export const selectWomensAccessories = createSelector(
  [selectAccessoriesCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "womens")
);
