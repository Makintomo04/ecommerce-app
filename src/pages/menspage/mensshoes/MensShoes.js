import React from "react";
import {
  selectMensShoes,
  selectShoesCollection,
} from "../../../redux/shoes/shoes.selectors";
import "../mensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
const MensShoes = ({ shoes, mensShoes }) => {
  // let shoesArray = shoes.slice();
  let shoesArray = JSON.parse(JSON.stringify(shoes));
  shoesArray[0].items = JSON.parse(JSON.stringify(mensShoes));
  //   console.log("OOOOO", shoes);
  //   console.log("OOOOO", mensShoes);
  //   console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="mens-category-page">
      <div className="container">
        <h1 className="mens-category-page__title">Men's Shoes</h1>
        <p className="mens-category-page__para">
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
  mensShoes: selectMensShoes,
});
export default connect(mapStateToProps, null)(MensShoes);
