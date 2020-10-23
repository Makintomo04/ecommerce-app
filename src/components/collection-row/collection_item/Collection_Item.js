import React, { useState, useEffect } from "react";
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
  favItems,
  wishlist,
}) => {
  // let favedItems = favItems.map(
  //   ({ fav, id }) =>
  //     id === item.id && console.log("DORDOM", { id: id, fav: fav })
  // );
  const [isFav, setIsFav] = useState(false);
  const { brand, name, price, imageUrl } = item;
  useEffect(() => {
    favItems.map(({ fav, id }) => item.id === id && setIsFav(fav));
  }, [favItems]);
  const addToWishlist = () => {
    setIsFav(!isFav);
    if (isFav === false) {
      addFavItem(item);
    } else {
      removeFavItem(item);
    }
  };
  const moveToBag = (item) => {
    setIsFav(false);
    addItem(item);
    removeFavItem(item);
  };
  return (
    <div className="collection_item">
      {!wishlist ? (
        <span className="add-to-wishlist" onClick={() => addToWishlist()}>
          {!isFav ? <i class="far fa-heart"></i> : <i class="fas fa-heart"></i>}
        </span>
      ) : (
        <span
          className="remove-from-wishlist"
          onClick={() => removeFavItem(item)}
        >
          <i class="far fa-trash-alt"></i>
        </span>
      )}
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
        {!wishlist && <img src={AddToBag} onClick={() => moveToBag(item)} />}
      </div>
      {wishlist && (
        <span
          className="collection_item__move-to-bag"
          onClick={() => moveToBag(item)}
        >
          Move To Bag
        </span>
      )}
    </div>
  );
};
const mapStateToProp = ({ wishlist: { favItems } }) => ({
  favItems,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addFavItem: (item) => dispatch(addFavItem(item)),
  removeFavItem: (item) => dispatch(removeFavItem(item)),
});
export default connect(mapStateToProp, mapDispatchToProps)(Collection_Item);
