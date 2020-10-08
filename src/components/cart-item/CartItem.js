import React from "react";
import "./cartItem.scss";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="cart-item__details">
        <span className="cart-item__details__price">£{price}.00</span>
        <span className="cart-item__details__name">{name}</span>
        <span className="cart-item__details__name">Qty: {quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
