import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import BagItem from "./BagItem";
import "./baglist.scss";
import BagTotal from "../bag-total/BagTotal";
const Bag = ({ cartItems }) => {
  return (
    <div className="container">
      <div className="bag">
        <div className="bag-list">
          <span className="bag-list__title">My Bag</span>
          {cartItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagTotal />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps, null)(Bag);
