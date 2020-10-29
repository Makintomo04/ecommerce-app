import { newinActionTypes } from "./newin.types";
import MensData from "../../pages/menspage/MensData";

const INITIAL_STATE = {
  directory: MensData,
};

const newinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case newinActionTypes.FILTER_NEWIN:
      return {
        ...state,
        directory: state.directory,
      };

    default:
      return state;
  }
};

export default newinReducer;
// state.directory[0].items.filter(
//   ({ gender }) => gender === action.payload
// )
