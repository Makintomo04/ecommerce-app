import { createSelector } from "reselect";

const selectClothing = (state) => state.clothing;

export const selectClothingCollection = createSelector(
  [selectClothing],
  (clothing) => clothing.directory
);
export const selectAllClothingItems = createSelector(
  [selectClothingCollection],
  (directory) => directory[0].items
);

export const selectMensClothing = createSelector(
  [selectClothingCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "mens")
);
export const selectWomensClothing = createSelector(
  [selectClothingCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "womens")
);
