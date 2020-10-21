import React, { useState } from "react";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { Link } from "react-router-dom";
import WomensData from "./WomensData";
import "./womenspage.scss";
import WomensBanner from "../../components/collection-row/collection_item/images/women/women_banner.jpg";
import GenderCategory from "../../components/gender-category/GenderCategory";
import clothing from "../../components/gender-category/images/womens/clothing.jpg";
import shoes from "../../components/gender-category/images/womens/shoes.jpg";
import Accessories from "../../components/gender-category/images/womens/accessories.jpg";
import Activewear from "../../components/gender-category/images/womens/activewear.jpg";
const WomensComponent = () => {
  const [womensCollection] = useState({
    collections: WomensData,
  });
  const { collections } = womensCollection;
  return (
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
      <div className="categories-grid">
        {/* <GenderCategory title="New In" /> */}
        <GenderCategory title="Clothing" image={clothing} />
        <GenderCategory title="Shoes" image={shoes} />
        <GenderCategory title="Accessories" image={Accessories} />
        <GenderCategory title="Activewear" image={Activewear} />
        {/* <GenderCategory title="" /> */}
      </div>
    </div>
  );
};

export default WomensComponent;
