import { cartActionTypes } from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  adjustQuantity,
  reduceItemQuantity,
} from "./cart.utils";
import React from "react"
import {shallow} from "enzyme"
import {cartReducer} from "./cart.reducer"

describe("Cart Reducer",()=>{
    const initialState = {
        hidden: true,
        cartItems: [],
        promoCode: "",
    }

  it("Should return initial state", () => {
      expect(cartReducer(undefined,{})).toEqual({
        hidden: true,
        cartItems: [],
        promoCode: "",
      })
  });
  
  it("Should add item to cart array", () => {
      expect(cartReducer(initialState,{type:cartActionTypes.ADD_ITEM,payload:{id:1,brand:"Nike",name:"T-shirt",price:"30"}})).toEqual({
        hidden: true,
        cartItems: [{id:1,brand:"Nike",name:"T-shirt",price:"30",quantity:1}],
        promoCode: "",
      })
  });
  
  
  it("Should increment existing item quanity", () => {
      const mockState = {
        hidden: true,
        cartItems: [{id:1,brand:"Nike",name:"T-shirt",price:"30",quantity:1}],
        promoCode: "",
    }
      expect(cartReducer(mockState,{type:cartActionTypes.ADD_ITEM,payload:{id:1,brand:"Nike",name:"T-shirt",price:"30"}})).toEqual({
        hidden: true,
        cartItems: [{id:1,brand:"Nike",name:"T-shirt",price:"30",quantity:2}],
        promoCode: "",
      })
  });  


  it("Should set promocode to input", () => {
    expect(cartReducer(initialState,{type:cartActionTypes.SET_PROMO,payload:"fiver"})).toEqual({
      hidden: true,
      cartItems: [],
      promoCode: "fiver",
    })
}); 
})
