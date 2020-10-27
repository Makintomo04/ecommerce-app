import React from "react";
import {
  selectWomensActivewear,
  selectActivewearCollection,
} from "../../../redux/activewear/activewear.selectors";
import "../womensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
const WomensActivewear = ({ activewear, womensActivewear }) => {
  let activewearArray = JSON.parse(JSON.stringify(activewear));
  activewearArray[0].items = JSON.parse(JSON.stringify(womensActivewear));
  //   console.log("OOOOO", activewear);
  //   console.log("OOOOO", womensActivewear);
  //   console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="womens-category-page">
      <div className="container">
        <h1 className="womens-category-page__title">Women's Activewear</h1>
        <p className="womens-category-page__para">
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
  womensActivewear: selectWomensActivewear,
});
export default connect(mapStateToProps, null)(WomensActivewear);
