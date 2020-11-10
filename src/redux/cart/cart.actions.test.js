import { cartActionTypes } from "./cart.types";
import {setCartHidden,setPromo} from "./cart.actions"

describe("Cart Reducer",()=>{
  it("Should create an action to set promo code", () => {
      const code = "happy"
      const expectedAction = {
          type:cartActionTypes.SET_PROMO,
          payload:"happy"
      }
      expect(setPromo(code)).toEqual(expectedAction)
  });
  it("Should create an action to toggle cart dropdown visibility", () => {
      const expectedAction = {
          type:cartActionTypes.SET_CART_HIDDEN,
          payload:false
      }
    expect(setCartHidden(false)).toEqual(expectedAction)
});
})