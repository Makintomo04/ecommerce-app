import React from "react";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";
import BagItem from "../bag-list/BagItem";
import { connect } from "react-redux";
import "./checkoutItems.scss";
import { withRouter } from "react-router-dom";
import Button from "../button/Button";
const CheckoutItems = ({
  cartItems,
  cartTotal,
  history,
  promoCode,
  cartCount,
}) => {
  let total = cartTotal;
  promoCode === "ABC123" ? (total = cartTotal - 5) : (total = total);
  return (
    <div className="checkout-items">
      <div className="checkout-items__top">
        <span className="checkout-items__top__item-count">
          {cartCount} Item{cartCount !== 1 ? "s" : null}
        </span>
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
        {promoCode === "ABC123" && (
          <div className="checkout-items__summarydetails__discount">
            <p>Discount</p>
            <p>- £5.00</p>
          </div>
        )}

        <div className="checkout-items__summarydetails__total">
          <p>Total</p>
          {promoCode === "ABC123" ? <p>£{total}.00</p> : <p>£{total}.00</p>}
        </div>
        <Button>Place Order</Button>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartCount: selectCartItemsCount,
  cartTotal: selectCartItemsTotal,
});
export default withRouter(connect(mapStateToProps, null)(CheckoutItems));
