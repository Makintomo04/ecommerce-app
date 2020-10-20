import React, { useState } from "react";
import "./checkout.scss";
import PromoInput from "../../components/promo/PromoInput";
import DeliveryAddress from "../../components/deliveryAddress/DeliveryAddress";
import CheckoutItems from "../../components/checkout-items/CheckoutItems";
import PaymentInfo from "../../components/payment-info/PaymentInfo";
import { connect } from "react-redux";
const Checkout = () => {
  // const [promoCode, setPromoCode] = useState("");
  return (
    <div className="checkout-wrapper">
      <div className="container">
        <h1 className="checkout-title">Checkout</h1>
        <div className="checkout">
          <div className="checkout__left">
            <DeliveryAddress />
            <PromoInput />
            <PaymentInfo />
          </div>
          <div className="checkout__right">
            <CheckoutItems />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cart }) => ({
  promoCode: cart.promoCode,
});
export default connect(mapStateToProps, null)(Checkout);
