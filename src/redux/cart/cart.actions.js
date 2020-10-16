import { cartActionTypes } from "./cart.types";
export const setCartHidden = (bool) => ({
  type: cartActionTypes.SET_CART_HIDDEN,
  payload: bool,
});
export const setPromo = (promo) => ({
  type: cartActionTypes.SET_PROMO,
  payload: promo,
});
export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
export const reduceItemQuantity = (item) => ({
  type: cartActionTypes.REDUCE_ITEM_QUANTITY,
  payload: item,
});
export const adjustQuantity = (item, value) => ({
  type: cartActionTypes.ADJUST_QUANTITY,
  payload: item,
  value: value,
});
