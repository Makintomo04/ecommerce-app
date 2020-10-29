import React from "react";
import "../womensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
import { selectWomensNewInCollection } from "../../../redux/womens-newin/womensnewin.selectors";
const WomensNewIn = ({ newin }) => {
  //   let clothingArray = JSON.parse(JSON.stringify(clothing));
  //   clothingArray[0].items = JSON.parse(JSON.stringify(womensClothing));
  // console.log("OOOOO", match);
  // console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="womens-category-page">
      <div className="container">
        <h1 className="womens-category-page__title">New In</h1>
        <p className="womens-category-page__para">
          Looking for the latest drops in womens fashion? You're at the right
          place, you'll find all the latest & hottest trends here.
        </p>
        {newin.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  newin: selectWomensNewInCollection,
});
export default connect(mapStateToProps, null)(WomensNewIn);
