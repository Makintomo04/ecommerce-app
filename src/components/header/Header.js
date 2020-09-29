import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      {/*column flex*/}
      <header>
        <div className="lang">
          <span>GB/GBP £</span>
        </div>
        <div className="logo">
          <Link to="/">
            <h1>MARQ-E</h1>
          </Link>
        </div>
        <ul>
          <li>
            <i class="far fa-user-circle"></i>
          </li>
          <li>
            <i class="fas fa-heart"></i>
          </li>
          <li>
            <i class="fas fa-shopping-basket"></i>
          </li>
        </ul>
      </header>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/activewear">Activewear</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
        </ul>
      </nav>
      <div className="delivery_banner">
        <div className="delivery_banner__inner">
          <span className="delivery_banner__inner__text">
            Free Standard Delivery | Find out more
          </span>
          <span className="delivery_banner__inner__text">
            View our store reopening update
          </span>
          <span className="delivery_banner__inner__text">
            UNiDAYS - 20% off for students
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
