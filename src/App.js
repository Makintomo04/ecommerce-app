import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import LoginPage from "./pages/sign-in-sign-up/SignInSignUp";
import HomePage from "./pages/homepage/HomePage";
import MensPage from "./pages/menspage/MensPage";
import ShoesPage from "./pages/shoespage/Shoes";
import Directory from "./components/directory/Directory";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [userAuth, setUserAuth] = useState(null);
  // let unsubscribeAuth = null;
  const unsubscribeAuth = useRef(null);
  useEffect(() => {
    unsubscribeAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      // setUserAuth(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUserAuth({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUserAuth(userAuth);
      }
      console.log(userAuth);
    });
    return () => unsubscribeAuth.current();
  }, []);
  // console.log(userAuth);
  return (
    <div className="App">
      <div className="App__Content">
        <Header currentUser={userAuth} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/mens" component={MensPage} />
          <Route path="/shoes" component={ShoesPage} />
        </Switch>
      </div>
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}

export default App;
