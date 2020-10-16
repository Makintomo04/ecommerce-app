import React from "react";
import "./paymentInfo.scss";
const PaymentInfo = () => {
  return (
    <div className="payment-info">
      <h2>
        Payment Instructions <i class="fas fa-info-circle"></i>
      </h2>
      <div className="payment-info__instructions">
        <div className="">
          <p style={{ color: "red", paddingBottom: "20px" }}>
            *Please use the following test credit card information for payments*
          </p>
          <p>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
