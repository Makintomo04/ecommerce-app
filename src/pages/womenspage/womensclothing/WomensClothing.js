import React from "react";
import {
  selectWomensClothing,
  selectClothingCollection,
} from "../../../redux/clothing/clothing.selectors";
import "../womensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
export const WomensClothing = ({ clothing, womensClothing, match }) => {
  let clothingArray = JSON.parse(JSON.stringify(clothing));
  clothingArray[0].items = JSON.parse(JSON.stringify(womensClothing));
  // console.log("OOOOO", match);
  // console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="womens-category-page">
      <div className="container">
        <h1 className="womens-category-page__title">Women's Clothing</h1>
        <p className="womens-category-page__para">
          Stand out from the crowd – browse through fantastic range of accessory
          items to complement your outfit.
        </p>
        {clothingArray.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  clothing: selectClothingCollection,
  womensClothing: selectWomensClothing,
});
export default connect(mapStateToProps, null)(WomensClothing);
