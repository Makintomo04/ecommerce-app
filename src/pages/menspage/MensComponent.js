import React, { useState } from "react";
import MensData from "./MensData";
import "./menspage.scss";
import Collection_Row from "../../components/collection-row/Collection_Row";
import MensBanner from "../../components/collection-row/collection_item/images/men/men_banner.jpg";
import { Link } from "react-router-dom";
import GenderCategory from "../../components/gender-category/GenderCategory";
import clothing from "../../components/gender-category/images/mens/clothing.jpg";
import shoes from "../../components/gender-category/images/mens/shoes.jpg";
import Accessories from "../../components/gender-category/images/mens/accessories.jpg";
import Activewear from "../../components/gender-category/images/mens/activewear.jpg";
const MensComponent = () => {
  const [mensCollection, setMensCollection] = useState({
    collections: MensData,
  });
  const { collections } = mensCollection;
  return (
    <div className="container">
      <h1 className="mens-page__title">Mens's Fashion</h1>
      <p className="mens-page__para">
        Looking for the latest drops, insider interviews and style inspiration
        from our experts? You'll find it all here.
      </p>
      <div className="mens-page__banner">
        <img src={MensBanner} alt="" />
      </div>
      {collections.map(({ id, ...remainingProps }) => (
        <Collection_Row key={id} {...remainingProps} isPreview />
      ))}
      <span className="mens-page__newIn-link">
        <Link to="/new-in">SHOP NOW</Link>
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

export default MensComponent;
