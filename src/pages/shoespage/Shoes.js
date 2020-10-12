import React, { useState } from "react";
import ShoesData from "./ShoesData";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { filterCatalogue } from "./catalogue.utils";
import { connect } from "react-redux";
import "./shoespage.scss";
import { filterShoes } from "../../redux/shoes/shoes.actions";
import {
  selectMensShoes,
  selectWomensShoes,
  selectShoeItems,
} from "../../redux/shoes/shoes.selectors";
import { createStructuredSelector } from "reselect";
const Shoes = ({ directory, filterShoes, shoes, mensShoes, womensShoes }) => {
  const [shoeFilter, setShoeFilter] = useState("all");
  console.log(shoes);
  let tempfilter = shoes;
  const handleClick = (filter) => {
    if (filter === "mens") {
      tempfilter[0].items = mensShoes;
      setShoeFilter(filter);
    } else if (filter === "womens") {
      tempfilter[0].items = womensShoes;
      setShoeFilter(filter);
    } else {
      tempfilter = shoes;
      setShoeFilter("all");
    }
  };
  return (
    <div className="shoes-page">
      <div className="container">
        <h1 className="shoes-page__title">Shoes</h1>
        <p className="shoes-page__para">
          Time to put your best foot forward – in a brilliant new pair of shoes,
          of course. Have a little scroll through our excellent catalogue of
          shoes.
        </p>
        <div className="shoes-page__filter">
          <span onClick={() => handleClick("mens")}> Men's Shoes</span>
          <span onClick={() => handleClick("womens")}> Women's Shoes</span>
        </div>
        {shoes.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  shoes: selectShoeItems,
  mensShoes: selectMensShoes,
  womensShoes: selectWomensShoes,
});
const mapDispatchToProps = (dispatch) => ({
  filterShoes: (filter) => dispatch(filterShoes(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shoes);
