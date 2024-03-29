import React, { useState, useRef, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.scss";
import { TweenMax, Power3 } from "gsap";
import Button from "../button/Button";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden, setCartHidden, cartItems, history }) => {
  let mobileNav = useRef(null);
  const [toggleNav, setToggleNav] = useState(false);

  const handleClick = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="header-bg">
      {/* {console.log("yooo", currentUser)} */}
      {/*column flex*/}
      <header>
        <div className="ham" onClick={handleClick}>
          <i class="fas fa-bars"></i>
        </div>
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
                <i class="fas fa-user-circle"></i>
              </Link>
            ) : (
              <Link>
                <i class="fas fa-user-circle"></i>
              </Link>
            )}

            {currentUser && (
              <div className="profile-popup">
                <div className="profile-popup__inner">
                  {currentUser?.displayName ? (
                    <span>{`Welcome Back! ${currentUser?.displayName}`}</span>
                  ) : (
                    <span>{`Welcome Back! ${currentUser?.firstname}`}</span>
                  )}

                  <Button onClick={() => auth.signOut()}>Log Out</Button>
                </div>
              </div>
            )}
            {/* {console.log("yooo", currentUser)} */}
          </li>
          <li onClick={() => history.push("/wishlist")}>
            <i class="fas fa-heart"></i>
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>
        {!hidden ? <CartDropdown /> : null}
      </header>

      <nav
        ref={(el) => (mobileNav = el)}
        className={`${toggleNav === true ? "open-navbg" : "nav"}`}
      >
        <ul className={`${toggleNav === true ? "open-nav" : "nav-links"}`}>
          <li>
            <Link to="/mens" onClick={() => setToggleNav(false)}>
              Mens
            </Link>
          </li>
          <li>
            <Link to="/womens" onClick={() => setToggleNav(false)}>
              Womens
            </Link>
          </li>
          <li>
            <Link to="/clothing" onClick={() => setToggleNav(false)}>
              Clothing
            </Link>
          </li>
          <li>
            <Link to="/shoes" onClick={() => setToggleNav(false)}>
              Shoes
            </Link>
          </li>
          <li>
            <Link to="/accessories" onClick={() => setToggleNav(false)}>
              Accessories
            </Link>
          </li>
          <li>
            <Link to="/activewear" onClick={() => setToggleNav(false)}>
              Activewear
            </Link>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Header));
