import React from "react";
import BlogData from "./BlogData";
import "./Blog.scss";
import { Link } from "react-router-dom";
const Blog = ({ blogGender }) => {
  return (
    <div className="Blog">
      <div className="Blog__heading">
        <h2>IN THE KNOW</h2>
        <p>WWW.MARQE.COM</p>
      </div>
      <div className="Blog__row">
        {!blogGender
          ? BlogData.map(({ id, imageURL, title }) => (
              <div key={id} className="Blog__card">
                <div
                  className="Blog__card__image"
                  style={{ backgroundImage: `url(${imageURL})` }}
                ></div>

                <h3 className="Blog__card__title">{title}</h3>
                <span>
                  <Link to="/">READ MORE</Link>
                </span>
              </div>
            ))
          : BlogData.filter(({ id, gender }) => gender === blogGender).map(
              ({ id, imageURL, title }) => (
                <div key={id} className="Blog__card">
                  <div
                    className="Blog__card__image"
                    style={{ backgroundImage: `url(${imageURL})` }}
                  ></div>

                  <h3 className="Blog__card__title">{title}</h3>
                  <span>
                    <Link to="/">READ MORE</Link>
                  </span>
                </div>
              )
            )}
      </div>
    </div>
  );
};

export default Blog;
