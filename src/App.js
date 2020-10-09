import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import LoginPage from "./pages/sign-in-sign-up/SignInSignUp";
import HomePage from "./pages/homepage/HomePage";
import MensPage from "./pages/menspage/MensPage";
import ShoesPage from "./pages/shoespage/Shoes";
import CheckoutPage from "./pages/checkoutpage/Checkout";
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
            <Route path="/mens" component={MensPage} />
            <Route path="/shoes" component={ShoesPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
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
