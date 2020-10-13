import React from "react";
import "./cartItem.scss";
import { createStructuredSelector } from "reselect";
import { removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
const CartItem = ({ item, removeItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="cart-item__details">
        <span className="cart-item__details__price">£{price}.00</span>
        <span className="cart-item__details__name">{name}</span>
        <span className="cart-item__details__name">Qty: {quantity}</span>
      </div>
      <span className="remove-from-cart" onClick={() => removeItem(item)}>
        <i class="far fa-trash-alt"></i>
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
