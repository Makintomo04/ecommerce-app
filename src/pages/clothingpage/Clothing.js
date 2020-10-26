import React, { useState } from "react";
import ClothingData from "./ClothingData";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { filterCatalogue } from "./catalogue.utils";
import { connect } from "react-redux";
import "./clothingpage.scss";
import { filterClothing } from "../../redux/clothing/clothing.actions";
import {
  selectMensClothing,
  selectWomensClothing,
  selectClothingCollection,
  selectAllClothingItems,
} from "../../redux/clothing/clothing.selectors";
import { createStructuredSelector } from "reselect";
const Clothing = ({
  directory,
  clothing,
  allClothing,
  mensClothing,
  womensClothing,
}) => {
  const [clothingFilter, setClothingFilter] = useState("all");
  let tempfilter = [...clothing];
  console.log(tempfilter);
  const handleClick = (filter) => {
    tempfilter[0].items = [...allClothing];
    setClothingFilter("all");
    if (filter === "mens") {
      tempfilter[0].items = [...mensClothing];
      setClothingFilter("mens");
    } else if (filter === "womens") {
      tempfilter[0].items = [...womensClothing];
      setClothingFilter("womens");
    }
  };
  return (
    <div className="clothing-page">
      <div className="container">
        <h1 className="clothing-page__title">Clothing</h1>
        <p className="clothing-page__para">
          Stand out from the crowd – browse through fantastic range of accessory
          items to complement your outfit.
        </p>
        <div className="clothing-page__filter">
          <span onClick={() => handleClick("all")}>All</span>
          <span onClick={() => handleClick("mens")}>Men's Clothing</span>
          <span onClick={() => handleClick("womens")}>Women's Clothing</span>
        </div>
        {tempfilter.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  clothing: selectClothingCollection,
  allClothing: selectAllClothingItems,
  mensClothing: selectMensClothing,
  womensClothing: selectWomensClothing,
});
const mapDispatchToProps = (dispatch) => ({
  filterClothing: (filter) => dispatch(filterClothing(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Clothing);
