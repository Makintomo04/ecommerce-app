import React, { useState } from "react";
import MensData from "./MensData";
import "./menspage.scss";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { Link } from "react-router-dom";
const MensPage = () => {
  const [mensCollection, setMensCollection] = useState({
    collections: MensData,
  });
  const { collections } = mensCollection;
  return (
    <div className="mens-page">
      <div className="container">
        <h1 className="mens-page__title">Mens's Fashion</h1>
        <p className="mens-page__para">
          Looking for the latest drops, insider interviews and style inspiration
          from our experts? You'll find it all here.
        </p>
        {collections.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} />
        ))}
        <span className="mens-page__newIn-link">
          <Link to="/new-in">SHOP NOW</Link>
        </span>
      </div>
    </div>
  );
};

export default MensPage;
