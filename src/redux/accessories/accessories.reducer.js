import { accessoriesActionTypes } from "./accessories.types";
import AccessoriesData from "../../pages/accessoriespage/AccessoriesData";

const INITIAL_STATE = {
  directory: AccessoriesData,
};

const accessoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case accessoriesActionTypes.FILTER_ACCESSORIES:
      return {
        ...state,
        directory: state.directory,
      };

    default:
      return state;
  }
};

export default accessoriesReducer;
// state.directory[0].items.filter(
//   ({ gender }) => gender === action.payload
// )
