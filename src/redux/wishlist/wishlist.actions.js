import { wishlistActionTypes } from "./wishlist.types";
export const setFav = () => ({
  type: wishlistActionTypes.SET_FAV,
});
export const addFavItem = (item) => ({
  type: wishlistActionTypes.ADD_FAV_ITEM,
  payload: item,
});
export const removeFavItem = (item) => ({
  type: wishlistActionTypes.REMOVE_FAV_ITEM,
  payload: item,
});
