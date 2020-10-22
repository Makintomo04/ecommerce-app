import React, { useState } from "react";
import WomensComponent from "./WomensComponent";
import MensComponent from "../menspage/MensComponent";
import WomensClothing from "./womensclothing/WomensClothing";
import { Route, Switch } from "react-router-dom";
import WomensShoes from "./womensshoes/WomensShoes";
import WomensAccessories from "./womensaccessories/WomensAccessories";
import WomensActivewear from "./womensactivewear/WomensActivewear";
const WomensPage = ({ match }) => {
  console.log(match);
  return (
    <div className="womens-page">
      <Switch>
        <Route path={`${match.path}`} component={WomensComponent} />
        <Route path={`/${match.path}/clothing`} component={WomensClothing} />
        <Route path={`/${match.path}/shoes`} component={WomensShoes} />
        <Route
          path={`/${match.path}/accessories`}
          component={WomensAccessories}
        />
        <Route
          path={`/${match.path}/activewear`}
          component={WomensActivewear}
        />
      </Switch>
    </div>
  );
};

export default WomensPage;
