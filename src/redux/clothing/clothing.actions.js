import { clothingActionTypes } from "./clothing.types";
export const filterClothing = (filter) => ({
  type: clothingActionTypes.FILTER_CLOTHING,
  payload: filter,
});
