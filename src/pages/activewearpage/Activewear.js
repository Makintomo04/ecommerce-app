import React, { useState, useEffect } from "react";
import ActivewearData from "./ActivewearData";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { filterCatalogue } from "./catalogue.utils";
import { connect } from "react-redux";
import "./activewearpage.scss";
import { filterActivewear } from "../../redux/activewear/activewear.actions";
import {
  selectMensActivewear,
  selectWomensActivewear,
  selectActivewearCollection,
  selectAllActivewearItems,
} from "../../redux/activewear/activewear.selectors";
import { createStructuredSelector } from "reselect";
const Activewear = ({
  directory,
  activewear,
  allActivewear,
  mensActivewear,
  womensActivewear,
}) => {
  const [activewearFilter, setActivewearFilter] = useState("all");
  let tempActivewear = JSON.parse(JSON.stringify(activewear));
  const [localActivewear, setLocalActivewear] = useState([...activewear]);

  const handleClick = (filter) => {
    setActivewearFilter(filter);
  };
  useEffect(() => {
    if (activewearFilter === "mens") {
      tempActivewear[0].items = [...mensActivewear];
      setLocalActivewear([...tempActivewear]);
    } else if (activewearFilter === "womens") {
      tempActivewear[0].items = [...womensActivewear];
      setLocalActivewear([...tempActivewear]);
    } else setLocalActivewear([...activewear]);
  }, [activewearFilter]);

  return (
    <div className="activewear-page">
      <div className="container">
        <h1 className="activewear-page__title">Activewear</h1>
        <p className="activewear-page__para">
          Stand out from the crowd – browse through fantastic range of accessory
          items to complement your outfit.
        </p>
        <div className="activewear-page__filter">
          <span onClick={() => handleClick("all")}>All</span>
          <span onClick={() => handleClick("mens")}>Men's Activewear</span>
          <span onClick={() => handleClick("womens")}>Women's Activewear</span>
        </div>
        {localActivewear.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  activewear: selectActivewearCollection,
  allActivewear: selectAllActivewearItems,
  mensActivewear: selectMensActivewear,
  womensActivewear: selectWomensActivewear,
});
const mapDispatchToProps = (dispatch) => ({
  filterActivewear: (filter) => dispatch(filterActivewear(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Activewear);
