import { shoesActionTypes } from "./shoes.types";
export const filterShoes = (filter) => ({
  type: shoesActionTypes.FILTER_SHOES,
  payload: filter,
});
