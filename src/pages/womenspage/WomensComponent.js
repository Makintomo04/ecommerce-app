import React, { useState, useRef, useEffect } from "react";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import { Link } from "react-router-dom";
import WomensData from "./WomensData";
import "./womenspage.scss";
import WomensBanner from "../../components/collection-row/collection_item/images/women/women_banner.jpg";
import GenderCategory from "../../components/gender-category/GenderCategory";
import clothing from "../../components/gender-category/images/womens/clothing.jpg";
import shoes from "../../components/gender-category/images/womens/shoes.jpg";
import Accessories from "../../components/gender-category/images/womens/accessories.jpg";
import Activewear from "../../components/gender-category/images/womens/activewear.jpg";
import { withRouter } from "react-router-dom";
import Blog from "../../components/blog/Blog";
import PreviewRow from "../../components/preview-row/PreviewRow";
const WomensComponent = ({ history }) => {
  const [womensCollection] = useState({
    collections: WomensData,
  });
  const { collections } = womensCollection;
  let womensBannerImg = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    tl.from(womensBannerImg, 1.2, { y: -1200, ease: Power3 }).from(
      womensBannerImg,
      1.6,
      { scale: 2 },
      0.2
    );
  });
  return (
    <div className="container">
      <h1 className="womens-page__title">Women's Fashion</h1>
      <p className="womens-page__para">
        Looking for the latest drops, insider interviews and style inspiration
        from our experts? You'll find it all here.
      </p>
      <div className="womens-page__banner">
        <img ref={(el) => (womensBannerImg = el)} src={WomensBanner} alt="" />
      </div>
      {collections.map(({ id, ...remainingProps }) => (
        <PreviewRow key={id} {...remainingProps} isPreview />
      ))}
      <span className="womens-page__newIn-link">
        <Link to="womens/new-in">SHOP NOW</Link>
      </span>
      <div className="categories-grid">
        {/* <GenderCategory title="New In" /> */}
        <GenderCategory
          gender="womens"
          history={history}
          title="clothing"
          image={clothing}
        />
        <GenderCategory gender="womens" title="shoes" image={shoes} />
        <GenderCategory
          gender="womens"
          title="accessories"
          image={Accessories}
        />
        <GenderCategory gender="womens" title="activewear" image={Activewear} />
        {/* <GenderCategory title="" /> */}
      </div>
      <Blog blogGender="womens" />
    </div>
  );
};

export default WomensComponent;
