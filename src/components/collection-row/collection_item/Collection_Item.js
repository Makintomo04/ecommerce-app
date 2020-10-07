import React from "react";
import "./collection_item.scss";
import AddToBag from "./images/addToBag.png";
const Collection_Item = ({ id, brand, name, price, imageUrl }) => {
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
        <img src={AddToBag} />
      </div>
    </div>
  );
};

export default Collection_Item;
