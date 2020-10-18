import React from "react";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
  selectCartItemsCount,
  selectCartItemsdiscountedTotal,
} from "../../redux/cart/cart.selectors";
import BagItem from "../bag-list/BagItem";
import { connect } from "react-redux";
import "./checkoutItems.scss";
import { withRouter } from "react-router-dom";
import Button from "../button/Button";
import { setPromo } from "../../redux/cart/cart.actions";
import PayWithStripe from "../stripe/PayWithStripe";
const CheckoutItems = ({
  cartItems,
  cartTotal,
  history,
  promoCode,
  cartCount,
  discountedCartTotal,
  setPromo,
}) => {
  let total = discountedCartTotal;
  const handleRemove = () => {
    // total = cartTotal;
    setPromo("");
  };
  // promoCode === "ABC123" ? (total = cartTotal - 5) : (total = total);
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
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p>Promo code Applied:</p>
              <p style={{ color: "#777" }}>ABC123</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              {" "}
              <p>- £{Math.round(cartTotal * 0.1)}.00</p>
              <p
                style={{
                  cursor: "pointer",
                  borderBottom: "1px solid #777",
                  color: "#777",
                }}
                onClick={handleRemove}
              >
                Remove
              </p>
            </div>
          </div>
        )}
        <div className="checkout-items__summarydetails__total">
          <p>Total</p>
          {promoCode === "ABC123" ? (
            <p>£{discountedCartTotal}.00</p>
          ) : (
            <p>£{cartTotal}.00</p>
          )}
        </div>
        {/* <Button>PLACE ORDER</Button> */}
        <PayWithStripe
          style={{ width: "100%" }}
          price={promoCode === "ABC123" ? discountedCartTotal : cartTotal}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartCount: selectCartItemsCount(state),
  cartTotal: selectCartItemsTotal(state),
  discountedCartTotal: selectCartItemsdiscountedTotal(state),
  promoCode: state.cart.promoCode,
});
const mapDispatchToProps = (dispatch) => ({
  setPromo: (promo) => dispatch(setPromo(promo)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckoutItems)
);
