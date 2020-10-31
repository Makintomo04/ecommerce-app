import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import "./App.scss";
import Directory from "./components/directory/Directory";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
const LoginPage = lazy(() => import("./pages/sign-in-sign-up/SignInSignUp"));
const HomePage = lazy(() => import("./pages/homepage/HomePage"));
const MensPage = lazy(() => import("./pages/menspage/MensPage"));
const WomensPage = lazy(() => import("./pages/womenspage/WomensPage"));
const ClothingPage = lazy(() => import("./pages/clothingpage/Clothing"));
const WomensClothing = lazy(() =>
  import("./pages/womenspage/womensclothing/WomensClothing")
);
const ShoesPage = lazy(() => import("./pages/shoespage/Shoes"));
const AccessoriesPage = lazy(() =>
  import("./pages/accessoriespage/Accessories")
);
const ActivewearPage = lazy(() => import("./pages/activewearpage/Activewear"));
const CheckoutPage = lazy(() => import("./pages/checkoutpage/Checkout"));
const WishListPage = lazy(() => import("./pages/wishlistpage/WishList"));
const Bag = lazy(() => import("./pages/bagpage/BagPage"));
const WomensShoes = lazy(() =>
  import("./pages/womenspage/womensshoes/WomensShoes")
);
const WomensAccessories = lazy(() =>
  import("./pages/womenspage/womensaccessories/WomensAccessories")
);
const WomensActivewear = lazy(() =>
  import("./pages/womenspage/womensactivewear/WomensActivewear")
);
const NewInMens = lazy(() => import("./pages/menspage/newin/NewIn"));
const NewInWomens = lazy(() => import("./pages/womenspage/newin/WomensNewIn"));
const MensClothing = lazy(() =>
  import("./pages/menspage/mensclothing/MensClothing")
);
const MensShoes = lazy(() => import("./pages/menspage/mensshoes/MensShoes"));
const MensAccessories = lazy(() =>
  import("./pages/menspage/mensaccessories/MensAccessories")
);
const MensActivewear = lazy(() =>
  import("./pages/menspage/mensactivewear/MensActivewear")
);

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
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
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
                <Route
                  path="/womens/accessories"
                  component={WomensAccessories}
                />
                <Route path="/womens/activewear" component={WomensActivewear} />
                <Route path="/clothing" component={ClothingPage} />
                <Route path="/shoes" component={ShoesPage} />
                <Route path="/accessories" component={AccessoriesPage} />
                <Route path="/activewear" component={ActivewearPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route exact path="/bag" component={Bag} />
                <Route exact path="/wishlist" component={WishListPage} />
              </Suspense>
            </ErrorBoundary>
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
