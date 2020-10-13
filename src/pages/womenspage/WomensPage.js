import React, { useState } from "react";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { Link } from "react-router-dom";
import WomensData from "./WomensData";
import "./womenspage.scss";
import WomensBanner from "../../components/collection-row/collection_item/images/women/women_banner.jpg";
const WomensPage = () => {
  const [womensCollection] = useState({
    collections: WomensData,
  });
  const { collections } = womensCollection;
  return (
    <div className="womens-page">
      <div className="container">
        <h1 className="womens-page__title">Women's Fashion</h1>
        <p className="womens-page__para">
          Looking for the latest drops, insider interviews and style inspiration
          from our experts? You'll find it all here.
        </p>
        <div className="womens-page__banner">
          <img src={WomensBanner} alt="" />
        </div>
        {collections.map(({ id, ...remainingProps }) => (
          <Collection_Row key={id} {...remainingProps} isPreview />
        ))}
        <span className="mens-page__newIn-link">
          <Link to="womens/new-in">SHOP NOW</Link>
        </span>
      </div>
    </div>
  );
};

export default WomensPage;
