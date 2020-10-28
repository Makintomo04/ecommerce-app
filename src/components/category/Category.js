import React from "react";
import "./Category.scss";
import { withRouter } from "react-router-dom";

const Category = ({ title, img_URL, history, link_URL, match }) => (
  <div
    className="category"
    onClick={() => history.push(`${match.url}${link_URL}`)}
    // onClick={() => console.log(match.url)}
  >
    <div className="category__bg"></div>
    <div className="category__content">
      <h1 className="category__title">{title}</h1>
      <span className="category__subtitle">Shop Now</span>
    </div>

    {/* {console.log(img_URL)} */}
  </div>
);

export default withRouter(Category);
