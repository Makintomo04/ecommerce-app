import React from "react";
import { connect } from "react-redux";
import { setCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cartIcon.scss";
const CartIcon = ({ setCartHidden, itemCount }) => {
  return (
    <div
      className="cart-icon"
      onMouseEnter={() => setCartHidden(false)}
      onMouseLeave={() => setCartHidden(true)}
    >
      <div className="cart-icon__icon">
        <i class="fas fa-shopping-bag"></i>
      </div>
      {console.log("fam", itemCount)}
      {itemCount != 0 && (
        <div className="item-count">
          <span className="item-count__no">{itemCount}</span>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  setCartHidden: (bool) => dispatch(setCartHidden(bool)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
