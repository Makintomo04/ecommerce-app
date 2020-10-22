import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.scss";
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
  return (
    <div className="header-bg">
      {/* {console.log("yooo", currentUser)} */}
      {/*column flex*/}
      <header>
        <div className="ham">
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

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/mens">Mens</Link>
          </li>
          <li>
            <Link to="/womens">Womens</Link>
          </li>
          <li>
            <Link to="/clothing">clothing</Link>
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
