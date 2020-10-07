import { cartActionTypes } from "./cart.types";
export const setCartHidden = (bool) => ({
  type: cartActionTypes.SET_CART_HIDDEN,
  payload: bool,
});
export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
