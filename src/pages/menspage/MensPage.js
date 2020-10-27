import React, { useState, useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import MensComponent from "./MensComponent";
import { Route, Switch } from "react-router-dom";
import MensShoes from "./mensshoes/MensShoes";
import MensActivewear from "./mensactivewear/MensActivewear";
import MensClothing from "./mensclothing/MensClothing";
import MensAccessories from "./mensaccessories/MensAccessories";

const MensPage = ({ match }) => {
  let mensPage = useRef(null);
  useEffect(() => {
    TweenMax.to(mensPage, 0, { css: { visibility: "visible" } });
  });
  return (
    <div ref={(el) => (mensPage = el)} className="mens-page">
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
