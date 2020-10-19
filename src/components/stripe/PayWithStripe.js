import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./payWithStripe.scss";
const PayWithStripe = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HdhzqFBoMs4geENXysdKb6J0ZdLEYFwHNQdyOAqb168kjD4u4SckXe2ECWuctOJNaJn9GLkI35aRYdkUXSCWD6t00gf86b3d1";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      className="orderButton"
      label="PAY NOW"
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

export default PayWithStripe;
