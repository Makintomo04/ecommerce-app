import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import LoginPage from "./pages/sign-in-sign-up/SignInSignUp";
import HomePage from "./pages/homepage/HomePage";
import MensPage from "./pages/menspage/MensPage";
import WomensPage from "./pages/womenspage/WomensPage";
import ClothingPage from "./pages/clothingpage/Clothing";
import WomensClothing from "./pages/womenspage/womensclothing/WomensClothing";
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
import WomensShoes from "./pages/womenspage/womensshoes/WomensShoes";
import WomensAccessories from "./pages/womenspage/womensaccessories/WomensAccessories";
import WomensActivewear from "./pages/womenspage/womensactivewear/WomensActivewear";
import NewInMens from "./pages/menspage/newin/NewIn";
import NewInWomens from "./pages/womenspage/newin/WomensNewIn";
import MensClothing from "./pages/menspage/mensclothing/MensClothing";
import MensShoes from "./pages/menspage/mensshoes/MensShoes";
import MensAccessories from "./pages/menspage/mensaccessories/MensAccessories";
import MensActivewear from "./pages/menspage/mensactivewear/MensActivewear";

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
            <Route path="/mens/new-in" component={NewInMens} />
            <Route path="/mens/shoes" component={MensShoes} />
            <Route path="/mens/accessories" component={MensAccessories} />
            <Route path="/mens/activewear" component={MensActivewear} />
            <Route exact path="/womens" component={WomensPage} />
            <Route path="/womens/new-in" component={NewInWomens} />
            <Route path="/womens/clothing" component={WomensClothing} />
            <Route path="/mens/clothing" component={MensClothing} />
            <Route path="/womens/shoes" component={WomensShoes} />
            <Route path="/womens/accessories" component={WomensAccessories} />
            <Route path="/womens/activewear" component={WomensActivewear} />
            <Route path="/clothing" component={ClothingPage} />
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
