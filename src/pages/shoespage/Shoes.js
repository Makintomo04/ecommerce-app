import React, { useState } from "react";
import ShoesData from "./ShoesData";
import Collection_Row from "../../components/collection-row/Collection_Row";
import "./shoespage.scss";
const Shoes = () => {
  const [shoesCollection, setShoesCollection] = useState({
    collections: ShoesData,
  });
  const { collections } = shoesCollection;
  return (
    <div className="shoes-page">
      <div className="container">
        <h1 className="shoes-page__title">Shoes</h1>
        <p className="shoes-page__para">
          Time to put your best foot forward – in a brilliant new pair of shoes,
          of course. Have a little scroll through our excellent catalogue of
          shoes.
        </p>
        {collections.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} noTitle />
        ))}
      </div>
    </div>
  );
};

export default Shoes;
