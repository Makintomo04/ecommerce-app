import { cartActionTypes } from "./cart.types";
export const setCartHidden = (bool) => ({
  type: cartActionTypes.SET_CART_HIDDEN,
  payload: bool,
});
