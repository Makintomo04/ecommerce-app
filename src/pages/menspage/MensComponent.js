import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
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
import Blog from "../../components/blog/Blog";
import PreviewRow from "../../components/preview-row/PreviewRow";
const MensComponent = ({ history }) => {
  const [mensCollection, setMensCollection] = useState({
    collections: MensData,
  });
  const { collections } = mensCollection;
  let mensBannerImg = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    tl.from(mensBannerImg, 1.2, { y: -1200, ease: Power3.easeOut }).from(
      mensBannerImg,
      1.6,
      { scale: 2 },
      0.2
    );
  }, []);
  return (
    <div className="container">
      <h1 className="mens-page__title">Mens's Fashion</h1>
      <p className="mens-page__para">
        Looking for the latest drops, insider interviews and style inspiration
        from our experts? You'll find it all here.
      </p>
      <div className="mens-page__banner">
        <img ref={(el) => (mensBannerImg = el)} src={MensBanner} alt="" />
      </div>
      {collections.map(({ id, ...remainingProps }) => (
        <PreviewRow key={id} {...remainingProps} isPreview />
      ))}
      <span className="mens-page__newIn-link">
        <Link to="/new-in">SHOP NOW</Link>
      </span>
      <div className="categories-grid">
        {/* <GenderCategory title="New In" /> */}
        <GenderCategory
          no="1"
          gender="mens"
          history={history}
          title="clothing"
          image={clothing}
        />
        <GenderCategory no="2" gender="mens" title="shoes" image={shoes} />
        <GenderCategory
          no="3"
          gender="mens"
          title="accessories"
          image={Accessories}
        />
        <GenderCategory
          no="4"
          gender="mens"
          title="activewear"
          image={Activewear}
        />
        {/* <GenderCategory title="" /> */}
      </div>
      <Blog blogGender="mens" />
    </div>
  );
};

export default MensComponent;
