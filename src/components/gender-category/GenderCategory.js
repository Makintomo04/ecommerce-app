import React from "react";
import "./genderCategory.scss";
const GenderCategory = ({ image, title }) => {
  return (
    <div className="gender-category">
      <div className="gender-category__image">
        <img src={image} alt={title} />
      </div>
      <p className="gender-category__title">{title}</p>
    </div>
  );
};

export default GenderCategory;
