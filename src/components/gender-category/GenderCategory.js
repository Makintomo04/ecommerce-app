import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import "./genderCategory.scss";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
const GenderCategory = ({ gender, image, title, history, no }) => {
  // let categoryImg = useRef([]);
  // let tl = new TimelineLite();
  // useEffect(() => {
  //   TweenMax.staggerFrom(
  //     categoryImg.current,
  //     2,
  //     {
  //       y: 1200,
  //       ease: Power3,
  //     },
  //     0.7
  //   );
  // });
  return (
    // <Link to="womens/clothing">
    <div
      className="gender-category"
      onClick={() => history.push(`/${gender}/${title}`)}
    >
      <div className="gender-category__image">
        <img src={image} alt={title} />
      </div>
      <p className="gender-category__title">{title}</p>
    </div>
    // </Link>
  );
};

export default withRouter(GenderCategory);
