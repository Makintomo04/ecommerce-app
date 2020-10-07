import React from "react";
import { connect } from "react-redux";
import { setCartHidden } from "../../redux/cart/cart.actions";
import "./cartIcon.scss";
const CartIcon = ({ setCartHidden }) => {
  return (
    <div
      className="cart-icon"
      onMouseEnter={() => setCartHidden(false)}
      onMouseLeave={() => setCartHidden(true)}
    >
      <div className="cart-icon__icon">
        <i class="fas fa-shopping-bag"></i>
      </div>
      <div className="item-count">
        <span className="item-count__no">4</span>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setCartHidden: (bool) => dispatch(setCartHidden(bool)),
});
export default connect(null, mapDispatchToProps)(CartIcon);
