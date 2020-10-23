import React from "react";
import {
  selectMensActivewear,
  selectActivewearCollection,
} from "../../../redux/activewear/activewear.selectors";
import "../mensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
const MensActivewear = ({ activewear, mensActivewear }) => {
  let activewearArray = activewear;
  activewearArray[0].items = mensActivewear;
  //   console.log("OOOOO", activewear);
  //   console.log("OOOOO", mensActivewear);
  //   console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="mens-category-page">
      <div className="container">
        <h1 className="mens-category-page__title">Men's Activewear</h1>
        <p className="mens-category-page__para">
          Stand out from the crowd – browse through fantastic range of accessory
          items to complement your outfit.
        </p>
        {activewearArray.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  activewear: selectActivewearCollection,
  mensActivewear: selectMensActivewear,
});
export default connect(mapStateToProps, null)(MensActivewear);
