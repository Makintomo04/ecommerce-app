import { shoesActionTypes } from "./shoes.types";
import ShoesData from "../../pages/shoespage/ShoesData";

const INITIAL_STATE = {
  directory: ShoesData,
};

const shoesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shoesActionTypes.FILTER_SHOES:
      return {
        ...state,
        directory: state.directory,
      };

    default:
      return state;
  }
};

export default shoesReducer;
// state.directory[0].items.filter(
//   ({ gender }) => gender === action.payload
// )
