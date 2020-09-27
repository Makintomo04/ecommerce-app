import React from "react";
import "./Category.scss";

const Category = ({ title, img_URL }) => (
  <div className="category">
    <div
      className="category__bg"
      style={
        {
          // backgroundImage: `url(./images/men3)`,
        }
      }
    ></div>
    <div className="category__content">
      <h1 className="category__title">{title}</h1>
      <span className="category__subtitle">Shop Now</span>
    </div>

    {console.log(img_URL)}
  </div>
);

export default Category;
