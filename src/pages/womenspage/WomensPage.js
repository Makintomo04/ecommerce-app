import React, { useState } from "react";
import WomensComponent from "./WomensComponent";
import MensComponent from "../menspage/MensComponent";
import WomensClothing from "./womensclothing/WomensClothing";
import { Route, Switch } from "react-router-dom";
import WomensShoes from "./womensshoes/WomensShoes";
const WomensPage = ({ match }) => {
  console.log(match);
  return (
    <div className="womens-page">
      <Switch>
        <Route path={`${match.path}`} component={WomensComponent} />
        <Route path={`/${match.path}/clothing`} component={WomensClothing} />
        <Route path={`/${match.path}/shoes`} component={WomensShoes} />
      </Switch>
    </div>
  );
};

export default WomensPage;
