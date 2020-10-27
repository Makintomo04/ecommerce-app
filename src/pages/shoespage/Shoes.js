import React, { useState, useEffect } from "react";
import ShoesData from "./ShoesData";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { filterCatalogue } from "./catalogue.utils";
import { connect } from "react-redux";
import "./shoespage.scss";
import { filterShoes } from "../../redux/shoes/shoes.actions";
import {
  selectMensShoes,
  selectWomensShoes,
  selectShoesCollection,
  selectAllShoeItems,
} from "../../redux/shoes/shoes.selectors";
import { createStructuredSelector } from "reselect";
const Shoes = ({
  directory,
  filterShoes,
  shoes,
  allShoes,
  mensShoes,
  womensShoes,
}) => {
  let tempShoes = JSON.parse(JSON.stringify(shoes));
  const [shoeFilter, setShoeFilter] = useState("all");
  const [localShoes, setLocalShoes] = useState([...shoes]);

  const handleClick = (filter) => {
    console.log(mensShoes);
    console.log(localShoes);
    setShoeFilter(filter);
  };
  useEffect(() => {
    if (shoeFilter === "mens") {
      tempShoes[0].items = [...mensShoes];
      setLocalShoes([...tempShoes]);
    } else if (shoeFilter === "womens") {
      tempShoes[0].items = [...womensShoes];
      setLocalShoes([...tempShoes]);
    } else setLocalShoes([...shoes]);
  }, [shoeFilter]);

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
          <span onClick={() => handleClick("all")}>All</span>
          <span onClick={() => handleClick("mens")}>Men's Shoes</span>
          <span onClick={() => handleClick("womens")}>Women's Shoes</span>
        </div>

        {localShoes.length > 0 &&
          localShoes.map(({ id, ...remainingProps }) => (
            <Collection_Row key={id} {...remainingProps} noTitle />
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  shoes: selectShoesCollection,
  allShoes: selectAllShoeItems,
  mensShoes: selectMensShoes,
  womensShoes: selectWomensShoes,
});
const mapDispatchToProps = (dispatch) => ({
  filterShoes: (filter) => dispatch(filterShoes(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shoes);
