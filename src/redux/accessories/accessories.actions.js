import { accessoriesActionTypes } from "./accessories.types";
export const filterAccessories = (filter) => ({
  type: accessoriesActionTypes.FILTER_ACCCESSORIES,
  payload: filter,
});
