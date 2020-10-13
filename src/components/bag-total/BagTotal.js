import React from "react";
import Button from "../button/Button";
import "./bagtotal.scss";
import {
  selectCartItemsCount,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
const BagTotal = ({ cartItemsCount, cartItemsTotal, history }) => {
  return (
    <div className="bag-total">
      <h2>Order Summary</h2>
      <span className="bag-total__count">My Bag: ({cartItemsCount} items)</span>
      <h3>Total(excluding delivery): £{cartItemsTotal}.00</h3>
      <Button
        onClick={() => {
          history.push("./checkout");
        }}
      >
        Checkout
      </Button>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
  cartItemsTotal: selectCartItemsTotal,
});
export default withRouter(connect(mapStateToProps, null)(BagTotal));
