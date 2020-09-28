import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import MensPage from "./pages/menspage/MensPage";
import ShoesPage from "./pages/shoespage/Shoes";
import Directory from "./components/directory/Directory";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/mens" component={MensPage} />
        <Route path="/shoes" component={ShoesPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
