import React, { useState } from "react";
import "./collection_item.scss";
import AddToBag from "./images/addToBag.png";
import { connect } from "react-redux";
// import {createStructuredSelector} from "reselect"
import { addItem } from "../../../redux/cart/cart.actions";
import {
  addFavItem,
  removeFavItem,
} from "../../../redux/wishlist/wishlist.actions";
const Collection_Item = ({
  item,
  addItem,
  addFavItem,
  removeFavItem,
  favItem,
}) => {
  const [isFav, setIsFav] = useState(false);
  const { brand, name, price, imageUrl } = item;
  const addToWishlist = () => {
    setIsFav(!isFav);
    if (isFav === false) {
      addFavItem(item);
    } else {
      removeFavItem(item);
    }
  };
  return (
    <div className="collection_item">
      <span className="add-to-wishlist" onClick={() => addToWishlist()}>
        {console.log(isFav)}
        {!isFav ? <i class="far fa-heart"></i> : <i class="fas fa-heart"></i>}
      </span>
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
const mapStateToProp = ({ wishlist }) => ({
  favItem: wishlist.favItems.map((favItem) => favItem),
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addFavItem: (item) => dispatch(addFavItem(item)),
  removeFavItem: (item) => dispatch(removeFavItem(item)),
});
export default connect(mapStateToProp, mapDispatchToProps)(Collection_Item);
