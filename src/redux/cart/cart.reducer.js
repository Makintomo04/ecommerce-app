import { cartActionTypes } from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  adjustQuantity,
  reduceItemQuantity,
} from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  promoCode: "",
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.SET_CART_HIDDEN:
      return {
        ...state,
        hidden: action.payload,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REDUCE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: reduceItemQuantity(state.cartItems, action.payload),
      };
    case cartActionTypes.ADJUST_QUANTITY:
      return {
        ...state,
        cartItems: adjustQuantity(
          state.cartItems,
          action.payload,
          action.value
        ),
      };
    case cartActionTypes.SET_PROMO:
      return {
        ...state,
        promoCode: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
