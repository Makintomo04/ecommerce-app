import React, { useState, useEffect } from "react";
import "./Directory.scss";
import Category from "../category/Category";

const Directory = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Mens",
      img_URL: `/Makintomo04/ecommerce-app/static/media/men3.a9dea04a.jpg`,
    },
    {
      id: 2,
      title: "Womens",
      img_URL: "/Makintomo04/ecommerce-app/static/media/women2.69141f75.jpg",
    },
    {
      id: 3,
      title: "Shoes",
      img_URL: "/Makintomo04/ecommerce-app/static/media/creps.2af0247c.jpg",
    },
    {
      id: 4,
      title: "Accessories",
      img_URL: "/Makintomo04/ecommerce-app/static/media/accessory.fac7c75c.jpg",
    },
    {
      id: 5,
      title: "Activewear",
      img_URL: "/Makintomo04/ecommerce-app/static/media/brand2.0a95648d.jpg",
    },
    {
      id: 6,
      title: "Brands",
      img_URL: "/Makintomo04/ecommerce-app/static/media/nike.52712c27.jpg",
    },
  ]);
  return (
    <div className="directory-menu">
      {categories.map(({ id, title, img_URL }) => (
        <Category key={id} title={title} img_URL={img_URL} />
      ))}
    </div>
  );
};

export default Directory;
