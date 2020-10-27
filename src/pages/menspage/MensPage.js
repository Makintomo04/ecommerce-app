import React, { useState } from "react";
import MensComponent from "./MensComponent";
import { Route, Switch } from "react-router-dom";
import MensShoes from "./mensshoes/MensShoes";
import MensActivewear from "./mensactivewear/MensActivewear";
import MensClothing from "./mensclothing/MensClothing";
import MensAccessories from "./mensaccessories/MensAccessories";

const MensPage = ({ match }) => {
  return (
    <div className="mens-page">
      <Switch>
        <Route exact path={`${match.path}`} component={MensComponent} />
        <Route
          exact
          path={`/${match.path}/clothing`}
          component={MensClothing}
        />
        <Route path={`/${match.path}/shoes`} component={MensShoes} />
        <Route
          path={`/${match.path}/accessories`}
          component={MensAccessories}
        />
        <Route path={`/${match.path}/activewear`} component={MensActivewear} />
      </Switch>
    </div>
  );
};

export default MensPage;
