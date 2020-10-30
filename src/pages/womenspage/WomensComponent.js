import React, { useState, useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import Collection_Row from "../../components/collection-row/Collection_Row";
import { gsap, TweenMax, TimelineLite, Power3 } from "gsap";
import ScrollTrigger from "react-scroll-trigger";
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
  let dirGrid = useRef(null);
  let dirBlind = useRef(null);
  let dirBlind2 = useRef(null);
  let dirBlind3 = useRef(null);
  let dirBlind4 = useRef(null);
  let tl = new TimelineLite();

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

  // const onLeaveViewport = () => {
  //   tl.to(dirBlind, 1.2, { y: 1000, ease: Power3.easeInOut }, 1)
  //     .to(dirBlind, 0, { css: { display: "flex" } }, 0.2)
  //     .to(dirBlind2, 1.2, { y: 1000, ease: Power3.easeInOut }, 0.4)
  //     .to(dirBlind2, 0, { css: { display: "flex" } }, 0.2)
  //     .to(dirBlind3, 1.2, { y: 1000, ease: Power3.easeInOut }, 0.8)
  //     .to(dirBlind3, 0, { css: { display: "flex" } }, 0.2)
  //     .to(dirBlind4, 1.2, { y: 1000, ease: Power3.easeInOut }, 1.2)
  //     .to(dirBlind4, 0, { css: { display: "flex" } }, 0.2);
  // };
  // intersection < 0.2 && intersection.intersectionRatio < 0.2
  //   ? doNothing
  //   : animIn;
  // useEffect(() => {
  //   intersection && intersection.intersectionRatio < 0.9 ? fadeOut() : animIn();
  // }, []);
  useEffect(() => {
    tl.from(womensBannerImg, 1.2, { y: -1200, ease: Power3.easeOut }).from(
      womensBannerImg,
      1.6,
      { scale: 2 },
      0.2
    );
    // gsap.from(".categories-grid", {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".categories-grid",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
  }, []);
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
      <ScrollTrigger onEnter={onEnterViewport}>
        <div ref={(el) => (dirGrid = el)} className="categories-grid">
          {/* <GenderCategory title="New In" /> */}

          <div className="categories-grid__card">
            <GenderCategory
              gender="womens"
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
            <GenderCategory gender="womens" title="shoes" image={shoes} />
            <div
              ref={(el) => (dirBlind2 = el)}
              className="categories-grid__card__blind"
            ></div>
          </div>
          <div className="categories-grid__card">
            <GenderCategory
              gender="womens"
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
              gender="womens"
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
      <Blog blogGender="womens" />
    </div>
  );
};

export default WomensComponent;
