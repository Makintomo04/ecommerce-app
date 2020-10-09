import { addItemToWishList } from "./wishlist.utils";
import { removeItemFromWishList } from "./wishlist.utils";
import { wishlistActionTypes } from "./wishlist.types";
const INITIAL_STATE = {
  // fav: [false],
  favItems: [],
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case wishlistActionTypes.SET_FAV:
    //   return {
    //     ...state,
    //     fav:
    //   };
    case wishlistActionTypes.REMOVE_FAV_ITEM:
      return {
        ...state,
        favItems: removeItemFromWishList(state.favItems, action.payload),
      };
    case wishlistActionTypes.ADD_FAV_ITEM:
      return {
        ...state,
        favItems: addItemToWishList(state.favItems, action.payload),
      };
    default:
      return state;
  }
};

export default wishlistReducer;
