import React, { useState } from "react";
import "./bagitem.scss";
import { connect } from "react-redux";
import { selectCartItemQuantity } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  adjustQuantity,
  addItem,
  removeItem,
  reduceItemQuantity,
} from "../../redux/cart/cart.actions";
const BagItem = ({
  item,
  adjustQuantity,
  addItem,
  removeItem,
  reduceItemQuantity,
}) => {
  const [quantityVal, setQuantityVal] = useState(item.quantity);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuantityVal(value);
    console.log("val>>>", quantityVal);
    // adjustQuantity(item, parseInt(quantityVal));
  };
  return (
    <div className="bag-item">
      <img src={item.imageUrl} alt="item" />
      <div className="bag-item__details">
        <span className="bag-item__details__brand">{item.brand}</span>
        <span className="bag-item__details__name">{item.name}</span>
        <span className="bag-item__details__price">£{item.price}.00</span>
        <span>Qty</span>
        <div className="bag-item__details__quantity">
          <span className="arrow" onClick={() => reduceItemQuantity(item)}>
            &#10094;
          </span>
          <span className="no">{item.quantity}</span>
          <span className="arrow" onClick={() => addItem(item)}>
            &#10095;
          </span>
          {/* <select
            name="quantity"
            value={quantityVal}
            defaultValue={item.quantity}
            onChange={handleChange}
          >
            <option value={4}>1</option>
            <option value={3}>2</option>
            <option value={2}>3</option>
            <option value={1}>4</option>
            <option value={5}>5</option>
          </select> */}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  itemQuantity: selectCartItemQuantity,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  reduceItemQuantity: (item) => dispatch(reduceItemQuantity(item)),
  // adjustQuantity: (item, value) => dispatch(adjustQuantity(item, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BagItem);
