import React from "react";
import "./cartDropdown.scss";
import Button from "../button/Button";
import { connect } from "react-redux";
import { setCartHidden } from "../../redux/cart/cart.actions";
const CartDropdown = ({ setCartHidden }) => {
  return (
    <div
      className="cart-dropdown-wrapper"
      onMouseEnter={() => setCartHidden(false)}
      onMouseLeave={() => setCartHidden(true)}
    >
      <div className="cart-dropdown">
        <div className="cart-dropdown__count">
          <span>Bag, 4 Items</span>
        </div>
        <div className="cart-dropdow__items"></div>
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
const mapDispatchToProps = (dispatch) => ({
  setCartHidden: (bool) => dispatch(setCartHidden(bool)),
});
export default connect(null, mapDispatchToProps)(CartDropdown);
