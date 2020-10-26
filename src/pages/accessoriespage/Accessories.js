import React, { useState } from "react";
import AccessoriesData from "./AccessoriesData";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { filterCatalogue } from "./catalogue.utils";
import { connect } from "react-redux";
import "./accessoriespage.scss";
import { filterAccessories } from "../../redux/accessories/accessories.actions";
import {
  selectMensAccessories,
  selectWomensAccessories,
  selectAccessoriesCollection,
  selectAllAccessoryItems,
} from "../../redux/accessories/accessories.selectors";
import { createStructuredSelector } from "reselect";
const Accessories = ({
  directory,
  accessories,
  allAccessories,
  mensAccessories,
  womensAccessories,
}) => {
  const [accessoriesFilter, setAccessoriesFilter] = useState("all");
  let tempfilter = [...accessories];
  console.log(tempfilter);
  const handleClick = (filter) => {
    tempfilter[0].items = [...allAccessories];
    setAccessoriesFilter("all");
    if (filter === "mens") {
      tempfilter[0].items = [...mensAccessories];
      setAccessoriesFilter("mens");
    } else if (filter === "womens") {
      tempfilter[0].items = [...womensAccessories];
      setAccessoriesFilter("womens");
    }
  };
  return (
    <div className="accessories-page">
      <div className="container">
        <h1 className="accessories-page__title">Accessories</h1>
        <p className="accessories-page__para">
          Stand out from the crowd – browse through fantastic range of accessory
          items to complement your outfit.
        </p>
        <div className="accessories-page__filter">
          <span onClick={() => handleClick("all")}>All</span>
          <span onClick={() => handleClick("mens")}>Men's Accessories</span>
          <span onClick={() => handleClick("womens")}>Women's Accessories</span>
        </div>
        {tempfilter.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  accessories: selectAccessoriesCollection,
  allAccessories: selectAllAccessoryItems,
  mensAccessories: selectMensAccessories,
  womensAccessories: selectWomensAccessories,
});
const mapDispatchToProps = (dispatch) => ({
  filterAccessories: (filter) => dispatch(filterAccessories(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Accessories);
