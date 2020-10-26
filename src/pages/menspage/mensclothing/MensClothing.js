import React from "react";
import {
  selectMensClothing,
  selectClothingCollection,
} from "../../../redux/clothing/clothing.selectors";
import "../mensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
export const MensClothing = ({ clothing, mensClothing, match }) => {
  let clothingArray = [...clothing];
  clothingArray[0].items = [...mensClothing];
  // console.log("OOOOO", match);
  // console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="mens-category-page">
      <div className="container">
        <h1 className="mens-category-page__title">Women's Clothing</h1>
        <p className="mens-category-page__para">
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
  mensClothing: selectMensClothing,
});
export default connect(mapStateToProps, null)(MensClothing);
