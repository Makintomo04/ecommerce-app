import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import MensPage from "./pages/menspage/MensPage";
import Directory from "./components/directory/Directory";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Mens" component={MensPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
