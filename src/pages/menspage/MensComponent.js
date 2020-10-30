import React, { useState, useRef, useEffect } from "react";
import { gsap, TweenMax, TimelineLite, Power3 } from "gsap";
import ScrollTrigger from "react-scroll-trigger";
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
  let dirGrid = useRef(null);
  let dirBlind = useRef(null);
  let dirBlind2 = useRef(null);
  let dirBlind3 = useRef(null);
  let dirBlind4 = useRef(null);

  const onEnterViewport = () => {
    tl.to(dirBlind, 1.2, { y: -1000, ease: Power3.easeInOut }, 1)
      .to(dirBlind, 0, { css: { display: "none" } })
      .to(dirBlind2, 1.2, { y: -1000, ease: Power3.easeInOut }, 1.4)
      .to(dirBlind2, 0, { css: { display: "none" } })
      .to(dirBlind3, 1.2, { y: -1000, ease: Power3.easeInOut }, 1.8)
      .to(dirBlind3, 0, { css: { display: "none" } })
      .to(dirBlind4, 1.2, { y: -1000, ease: Power3.easeInOut }, 2.2)
      .to(dirBlind4, 0, { css: { display: "none" } });
  };
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
        <Link to="mens/new-in">SHOP NOW</Link>
      </span>
      <ScrollTrigger onEnter={onEnterViewport}>
        <div ref={(el) => (dirGrid = el)} className="categories-grid">
          {/* <GenderCategory title="New In" /> */}

          <div className="categories-grid__card">
            <GenderCategory
              gender="mens"
              history={history}
              title="clothing"
              image={clothing}
            />
            <div
              ref={(el) => (dirBlind = el)}
              className="categories-grid__card__blind"
            ></div>
          </div>

          <div className="categories-grid__card">
            <GenderCategory gender="mens" title="shoes" image={shoes} />
            <div
              ref={(el) => (dirBlind2 = el)}
              className="categories-grid__card__blind"
            ></div>
          </div>
          <div className="categories-grid__card">
            <GenderCategory
              gender="mens"
              title="accessories"
              image={Accessories}
            />
            <div
              ref={(el) => (dirBlind3 = el)}
              className="categories-grid__card__blind"
            ></div>
          </div>
          <div className="categories-grid__card">
            <GenderCategory
              gender="mens"
              title="activewear"
              image={Activewear}
            />
            <div
              ref={(el) => (dirBlind4 = el)}
              className="categories-grid__card__blind"
            ></div>
          </div>
        </div>
      </ScrollTrigger>
      <Blog blogGender="mens" />
    </div>
  );
};

export default MensComponent;
