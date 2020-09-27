import React from "react";
import "./Category.scss";

const Category = ({ title, img_URL }) => (
  <div className="menu-item">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${img_URL})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>

    {console.log(img_URL)}
  </div>
);

export default Category;
