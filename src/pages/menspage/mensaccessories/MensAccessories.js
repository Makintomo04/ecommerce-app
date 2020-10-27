import React from "react";
import {
  selectMensAccessories,
  selectAccessoriesCollection,
} from "../../../redux/accessories/accessories.selectors";
import "../mensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
const MensAccessories = ({ accessories, mensAccessories }) => {
  let accessoriesArray = JSON.parse(JSON.stringify(accessories));
  accessoriesArray[0].items = JSON.parse(JSON.stringify(mensAccessories));
  //   console.log("OOOOO", accessories);
  //   console.log("OOOOO", mensAccessories);
  //   console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="mens-category-page">
      <div className="container">
        <h1 className="mens-category-page__title">Men's Accessories</h1>
        <p className="mens-category-page__para">
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
  mensAccessories: selectMensAccessories,
});
export default connect(mapStateToProps, null)(MensAccessories);
