import { newinActionTypes } from "./womensnewin.types";
import WomensData from "../../pages/womenspage/WomensData";

const INITIAL_STATE = {
  directory: WomensData,
};

const womensNewInReducer = (state = INITIAL_STATE, action) => {
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

export default womensNewInReducer;
// state.directory[0].items.filter(
//   ({ gender }) => gender === action.payload
// )
