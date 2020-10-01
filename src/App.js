import React from "react";
import "./App.scss";
import LoginPage from "./pages/sign-in-sign-up/SignInSignUp";
import HomePage from "./pages/homepage/HomePage";
import MensPage from "./pages/menspage/MensPage";
import ShoesPage from "./pages/shoespage/Shoes";
import Directory from "./components/directory/Directory";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="App__Content">
        <Header />
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
