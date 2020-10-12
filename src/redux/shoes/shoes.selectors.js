import { createSelector } from "reselect";

const selectShoes = (state) => state.shoes;

export const selectShoesCollection = createSelector(
  [selectShoes],
  (shoes) => shoes.directory
);
export const selectAllShoeItems = createSelector(
  [selectShoesCollection],
  (directory) => directory[0].items
);

export const selectMensShoes = createSelector(
  [selectShoesCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "mens")
);
export const selectWomensShoes = createSelector(
  [selectShoesCollection],
  (directory) => directory[0].items.filter(({ gender }) => gender === "womens")
);
