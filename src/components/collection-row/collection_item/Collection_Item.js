import React from "react";
import "./collection_item.scss";
import AddToBag from "./images/addToBag.png";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cart.actions";
const Collection_Item = ({ item, addItem }) => {
  const { brand, name, price, imageUrl } = item;
  return (
    <div className="collection_item">
      <div
        className="collection_item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection_item__details-row">
        <div className="collection_item__details">
          <span className="collection_item__details__brand">{brand}</span>
          <span className="collection_item__details__name">{name}</span>
          <span className="collection_item__details__price">£{price}.00</span>
        </div>
        <img src={AddToBag} onClick={() => addItem(item)} />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(Collection_Item);
