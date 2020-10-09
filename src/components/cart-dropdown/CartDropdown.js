import React from "react";
import "./cartDropdown.scss";
import Button from "../button/Button";
import { connect } from "react-redux";
import { setCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/CartItem";
import {
  selectCartItemsCount,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
const CartDropdown = ({ setCartHidden, cartItems, itemCount }) => {
  return (
    <div
      className="cart-dropdown-wrapper"
      onMouseEnter={() => setCartHidden(false)}
      onMouseLeave={() => setCartHidden(true)}
    >
      <div className="cart-dropdown">
        <div className="cart-dropdown__count">
          <span>Bag, {itemCount} Items</span>
        </div>

        <div className="cart-dropdown__items ">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
        <div className="cart-dropdown__buttons" style={{ display: "flex" }}>
          <Button type="submit" theme="view-bag">
            View Bag
          </Button>
          <Button type="submit">Checkout</Button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  itemCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  setCartHidden: (bool) => dispatch(setCartHidden(bool)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
