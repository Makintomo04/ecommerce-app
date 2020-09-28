import React, { useState } from "react";
import MensData from "./MensData";
import Collection_Row from "../../components/collection-row/Collection_Row";
const MensPage = () => {
  const [mensCollection, setMensCollection] = useState({
    collections: MensData,
  });
  const { collections } = mensCollection;
  return (
    <div className="container">
      <h1>Shop Mens</h1>
      {collections.map(({ id, ...remainingProps }) => (
        <Collection_Row key={id} {...remainingProps} />
      ))}
    </div>
  );
};

export default MensPage;
