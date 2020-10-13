import React from "react";
import "./bagitem.scss";
const BagItem = ({ item }) => {
  return (
    <div className="bag-item">
      <img src={item.imageUrl} alt="item" />
      <div className="bag-item__details">
        <span className="bag-item__details__brand">{item.brand}</span>
        <span className="bag-item__details__name">{item.name}</span>
        <span className="bag-item__details__price">£{item.price}.00</span>
        <div className="bag-item__details__quantity">
          <span>Qty</span>
          <select name="quantity" id="quantity" defaultValue={item.quantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
