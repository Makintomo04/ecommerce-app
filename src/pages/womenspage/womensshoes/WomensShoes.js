import React from "react";
import {
  selectWomensShoes,
  selectShoesCollection,
} from "../../../redux/shoes/shoes.selectors";
import "../womensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
const WomensShoes = ({ shoes, womensShoes }) => {
  let shoesArray = shoes;
  shoesArray[0].items = womensShoes;
  //   console.log("OOOOO", shoes);
  //   console.log("OOOOO", womensShoes);
  //   console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="womens-category-page">
      <div className="container">
        <h1 className="womens-category-page__title">Women's Shoes</h1>
        <p className="womens-category-page__para">
          Stand out from the crowd – browse through fantastic range of accessory
          items to complement your outfit.
        </p>
        {shoesArray.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  shoes: selectShoesCollection,
  womensShoes: selectWomensShoes,
});
export default connect(mapStateToProps, null)(WomensShoes);
