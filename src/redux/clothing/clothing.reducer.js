import { clothingActionTypes } from "./clothing.types";
import ClothingData from "../../pages/clothingpage/ClothingData";

const INITIAL_STATE = {
  directory: ClothingData,
};

const clothingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case clothingActionTypes.FILTER_CLOTHING:
      return {
        ...state,
        directory: state.directory,
      };

    default:
      return state;
  }
};

export default clothingReducer;
// state.directory[0].items.filter(
//   ({ gender }) => gender === action.payload
// )
