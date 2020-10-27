import React from "react";
import {
  selectWomensAccessories,
  selectAccessoriesCollection,
} from "../../../redux/accessories/accessories.selectors";
import "../womensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
const WomensAccessories = ({ accessories, womensAccessories }) => {
  let accessoriesArray = JSON.parse(JSON.stringify(accessories));
  accessoriesArray[0].items = JSON.parse(JSON.stringify(womensAccessories));
  //   console.log("OOOOO", accessories);
  //   console.log("OOOOO", womensAccessories);
  //   console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="womens-category-page">
      <div className="container">
        <h1 className="womens-category-page__title">Women's Accessories</h1>
        <p className="womens-category-page__para">
          Stand out from the crowd – browse through fantastic range of accessory
          items to complement your outfit.
        </p>
        {accessoriesArray.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  accessories: selectAccessoriesCollection,
  womensAccessories: selectWomensAccessories,
});
export default connect(mapStateToProps, null)(WomensAccessories);
