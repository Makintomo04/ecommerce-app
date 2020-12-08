import React, { useEffect, useRef } from "react";
import StripeCheckout from "react-stripe-checkout";
import "./payWithStripe.scss";
import {connect} from "react-redux"
import {Route,Redirect, withRouter} from "react-router-dom"

import { clearCart } from "../../redux/cart/cart.actions";
const PayWithStripe = ({price, clearCart,history}) => {
  // let button = useRef(null)
  // // button.style.color = "red"
  useEffect(() => {
    document.querySelector(".orderButton").style.background = "none"
    document.querySelector(".orderButton").style.boxShadow = "none"
    document.querySelector(".orderButton span").style.backgroundImage = "none"
    document.querySelector(".orderButton span").style.outline = "none"
    // document.querySelector(".orderButton span").style.padding = "15px"
    document.querySelector(".orderButton span").style.background = "black"
    document.querySelector(".orderButton span").style.fontWeight = "normal"
    document.querySelector(".orderButton span").style.borderRadius = "0"
    document.querySelector(".orderButton span").style.padding = "10px 0"
    document.querySelector(".orderButton span").style.height = "inherit"
  
}, [])
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HdhzqFBoMs4geENXysdKb6J0ZdLEYFwHNQdyOAqb168kjD4u4SckXe2ECWuctOJNaJn9GLkI35aRYdkUXSCWD6t00gf86b3d1";
  const onToken = (token) => {
    console.log(token);
    clearCart()
    history.push("/");
    // alert("Payment successful");
  };
  return (
    <StripeCheckout
      className="orderButton"
      label="Pay Now"
      name="MARQ-E Clothing"
      description={`Your total is £${price}`}
      ComponentClass="div"
      currency="GBP"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});
export default withRouter(connect(null, mapDispatchToProps)(PayWithStripe));
