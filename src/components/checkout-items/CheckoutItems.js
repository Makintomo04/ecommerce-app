import React from "react";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";
import BagItem from "../bag-list/BagItem";
import { connect } from "react-redux";
import "./checkoutItems.scss";
import { withRouter } from "react-router-dom";
import Button from "../button/Button";
const CheckoutItems = ({ cartItems, cartTotal, history }) => {
  return (
    <div className="checkout-items">
      <div className="checkout-items__top">
        <span className="checkout-items__top__item-count">2 Items</span>
        <span
          className="checkout-items__top__edit"
          onClick={() => history.push("./bag")}
        >
          Edit
        </span>
      </div>

      <ul>
        {cartItems.map((item) => (
          <BagItem key={item.id} item={item} checkout />
        ))}
      </ul>
      <div className="checkout-items__summarydetails">
        <div className="checkout-items__summarydetails__subtotal">
          <p>Subtotal</p>
          <p>£{cartTotal}.00</p>
        </div>
        <div className="checkout-items__summarydetails__delivery">
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div className="checkout-items__summarydetails__total">
          <p>Total</p>
          <p>£{cartTotal}.00</p>
        </div>
        <Button>Place Order</Button>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartItemsTotal,
});
export default withRouter(connect(mapStateToProps, null)(CheckoutItems));
