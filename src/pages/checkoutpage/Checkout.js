import React, { useState } from "react";
import "./checkout.scss";
import PromoInput from "../../components/promo/PromoInput";
import DeliveryAddress from "../../components/deliveryAddress/DeliveryAddress";
import CheckoutItems from "../../components/checkout-items/CheckoutItems";
import PaymentInfo from "../../components/payment-info/PaymentInfo";
const Checkout = () => {
  const [promoCode, setPromoCode] = useState("");
  return (
    <div className="checkout-wrapper">
      <div className="container">
        <h1 className="checkout-title">Checkout</h1>
        <div className="checkout">
          <div className="checkout__left">
            <DeliveryAddress />
            <PromoInput setPromoCode={setPromoCode} promoCode={promoCode} />
            <PaymentInfo />
          </div>
          <div className="checkout__right"></div>
          <CheckoutItems promoCode={promoCode} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
