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
            <h1>CELESTIAL&CO</h1>
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
    </div>
  );
};

export default Header;
