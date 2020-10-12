import { activewearActionTypes } from "./activewear.types";
import ActivewearData from "../../pages/activewearpage/ActivewearData";

const INITIAL_STATE = {
  directory: ActivewearData,
};

const activewearReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case activewearActionTypes.FILTER_ACTIVEWEAR:
      return {
        ...state,
        directory: state.directory,
      };

    default:
      return state;
  }
};

export default activewearReducer;
// state.directory[0].items.filter(
//   ({ gender }) => gender === action.payload
// )
