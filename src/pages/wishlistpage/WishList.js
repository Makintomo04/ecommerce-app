import React from "react";
import "./wishlist.scss";
import { connect } from "react-redux";
import Collection_Item from "../../components/collection-row/collection_item/Collection_Item";
// import {withRouter} from "react-router-dom"
const WishList = ({ favItems }) => {
  // favItems.forEach((item) => console.log("faved?:", item.fav));

  return (
    <div className="wishlist">
      <div className="wishlist__heading">
        <h3>My Wishlist</h3>
        <span>{favItems.length} items</span>
      </div>

      <div className="wishlist__items">
        {favItems.map((item) => (
          <div className="wishlist__item">
            <Collection_Item item={item} wishlist />
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = ({ wishlist: { favItems } }) => ({
  favItems,
});
// ../../redux/wishlist/wishlist.reducer
export default connect(mapStateToProps)(WishList);
