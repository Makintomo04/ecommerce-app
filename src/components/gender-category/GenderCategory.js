import React from "react";
import "./genderCategory.scss";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
const GenderCategory = ({ gender, image, title, history }) => {
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
