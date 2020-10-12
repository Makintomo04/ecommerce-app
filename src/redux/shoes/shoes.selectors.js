import { createSelector } from "reselect";

const selectShoes = (state) => state.shoes;

export const selectShoeItems = createSelector(
  [selectShoes],
  (shoes) => shoes.directory
);

export const selectMensShoes = createSelector([selectShoeItems], (directory) =>
  directory[0].items.filter(({ gender }) => gender === "mens")
);
export const selectWomensShoes = createSelector(
  [selectShoeItems],
  (directory) => directory[0].items.filter(({ gender }) => gender === "womens")
);
