import React from "react";
import { selectNewInCollection } from "../../../redux/newin/newin.selectors";
import "../mensCategory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection_Row from "../../../components/collection-row/Collection_Row";
const NewIn = ({ newin }) => {
  //   let clothingArray = JSON.parse(JSON.stringify(clothing));
  //   clothingArray[0].items = JSON.parse(JSON.stringify(mensClothing));
  // console.log("OOOOO", match);
  // console.log("HELLLOOOOOOOOOOOOOOOO");
  return (
    <div className="mens-category-page">
      <div className="container">
        <h1 className="mens-category-page__title">New In</h1>
        <p className="mens-category-page__para">
          Looking for the latest drops in mens fashion? You're at the right
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
  newin: selectNewInCollection,
  //   mensClothing: selectMensClothing,
});
export default connect(mapStateToProps, null)(NewIn);
