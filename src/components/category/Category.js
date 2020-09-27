import React from "react";
import "./Category.scss";

const Category = ({ title, img_URL }) => (
  <div
    style={{
      backgroundImage: `url(${img_URL})`,
    }}
    className="menu-item"
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>

    {console.log(img_URL)}
  </div>
);

export default Category;
