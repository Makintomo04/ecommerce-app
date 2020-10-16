import React from "react";
import "./deliveryaddress.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
const DeliveryAddress = ({ currentUser, cartItems }) => {
  return (
    <div className="delivery-address">
      <h2>Delivery Address</h2>
      <div className="delivery-address__details">
        <p>{currentUser?.displayName || "Guest Customer"}</p>
        <p>123 Alphabet Street</p>
        <p>Numberville</p>
        <p>ABC 1234</p>
        <p>UK</p>
        <p>07912345678</p>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});
export default connect(mapStateToProps, null)(DeliveryAddress);
