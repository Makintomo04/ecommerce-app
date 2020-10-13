import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import LoginPage from "./pages/sign-in-sign-up/SignInSignUp";
import HomePage from "./pages/homepage/HomePage";
import MensPage from "./pages/menspage/MensPage";
import WomensPage from "./pages/womenspage/WomensPage";
import ShoesPage from "./pages/shoespage/Shoes";
import AccessoriesPage from "./pages/accessoriespage/Accessories";
import ActivewearPage from "./pages/activewearpage/Activewear";
import CheckoutPage from "./pages/checkoutpage/Checkout";
import WishListPage from "./pages/wishlistpage/WishList";
import Bag from "./pages/bagpage/BagPage";
import Directory from "./components/directory/Directory";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <div className="App__Content">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/login"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <LoginPage />
              }
            />
            <Route exact path="/mens" component={MensPage} />
            <Route exact path="/womens" component={WomensPage} />
            <Route path="/shoes" component={ShoesPage} />
            <Route path="/accessories" component={AccessoriesPage} />
            <Route path="/activewear" component={ActivewearPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/bag" component={Bag} />
            <Route exact path="/wishlist" component={WishListPage} />
          </Switch>
        </div>
        {/* <HomePage /> */}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
