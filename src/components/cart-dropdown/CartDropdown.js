import React from "react";
import "./cartDropdown.scss";
import Button from "../button/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { setCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/CartItem";
import {
  selectCartItemsCount,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
const CartDropdown = ({ setCartHidden, cartItems, itemCount, history }) => {
  const goToCheckout = () => {
    history.push("./checkout");
    setCartHidden(true);
  };
  return (
    <div
      className="cart-dropdown-wrapper"
      onMouseEnter={() => setCartHidden(false)}
      onMouseLeave={() => setCartHidden(true)}
    >
      <div className="cart-dropdown">
        {cartItems.length > 0 && (
          <div className="cart-dropdown__count">
            <span>Bag, {itemCount} Items</span>
          </div>
        )}
        {cartItems.length > 0 ? (
          <div className="cart-dropdown__items ">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
        ) : (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              margin: "80px auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>Your bag is empty</span>
          </div>
        )}
        <div className="cart-dropdown__buttons" style={{ display: "flex" }}>
          <Button type="submit" theme="view-bag">
            View Bag
          </Button>
          <Button type="submit" onClick={goToCheckout}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  setCartHidden: (bool) => dispatch(setCartHidden(bool)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
