import React, { useState, useEffect, useRef } from "react";
import "./Directory.scss";
import Category from "../category/Category";
import { TweenMax, TimelineLite, Power3 } from "gsap";
const Directory = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Mens",
      img_URL: `/Makintomo04/ecommerce-app/static/media/men3.a9dea04a.jpg`,
      link_URL: "mens",
    },
    {
      id: 2,
      title: "Womens",
      img_URL: "/Makintomo04/ecommerce-app/static/media/women2.69141f75.jpg",
      link_URL: "womens",
    },
    {
      id: 3,
      title: "Shoes",
      img_URL: "/Makintomo04/ecommerce-app/static/media/creps.2af0247c.jpg",
      link_URL: "shoes",
    },
    {
      id: 4,
      title: "Accessories",
      img_URL: "/Makintomo04/ecommerce-app/static/media/accessory.fac7c75c.jpg",
      link_URL: "accessories",
    },
    {
      id: 5,
      title: "Activewear",
      img_URL: "/Makintomo04/ecommerce-app/static/media/brand2.0a95648d.jpg",
      link_URL: "activewear",
    },
    {
      id: 6,
      title: "Clothing",
      img_URL: "/Makintomo04/ecommerce-app/static/media/nike.52712c27.jpg",
      link_URL: "clothing",
    },
  ]);
  let categoryRef = useRef(null);
  let tl = new TimelineLite();
  // useEffect(() => {
  //   tl.from(categoryRef, 2, { y: 200, ease: Power3.easeOut });
  // }, []);
  return (
    <div className="directory-menu">
      <div ref={(el) => (categoryRef = el)} className="directory-menu__item">
        {categories.map(({ id, ...remainingProps }) => (
          <Category key={id} {...remainingProps} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
