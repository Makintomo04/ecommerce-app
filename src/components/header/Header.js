import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Button from "../button/Button";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ currentUser }) => {
  return (
    <div className="header-bg">
      {/*column flex*/}
      <header>
        <div className="lang">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <span>GB/GBP £</span>
            <i
              style={{ height: "25px", marginLeft: "10px" }}
              className="fas fa-sort-down"
            ></i>
          </div>
        </div>
        <div className="logo">
          <h1>
            <Link to="/">MARQ-E</Link>
          </h1>
        </div>
        <ul>
          <li>
            {!currentUser ? (
              <Link to="/login">
                <i class="far fa-user-circle"></i>
              </Link>
            ) : (
              <Link>
                <i class="far fa-user-circle"></i>
              </Link>
            )}

            {currentUser && (
              <div className="profile-popup">
                <div className="profile-popup__inner">
                  <span>{`Welcome Back! ${currentUser?.displayName}`}</span>
                  <Button onClick={() => auth.signOut()}>Log Out</Button>
                </div>
              </div>
            )}
            {console.log("yooo", currentUser)}
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
            <Link to="/mens">Mens</Link>
          </li>
          <li>
            <Link to="/womens">Womens</Link>
          </li>
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
