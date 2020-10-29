import React, { useState, useRef, useEffect } from "react";
import WomensComponent from "./WomensComponent";
import WomensClothing from "./womensclothing/WomensClothing";
import { TweenMax } from "gsap";
import { Route, Switch } from "react-router-dom";
import WomensNewIn from "./newin/WomensNewIn";
import WomensShoes from "./womensshoes/WomensShoes";
import WomensAccessories from "./womensaccessories/WomensAccessories";
import WomensActivewear from "./womensactivewear/WomensActivewear";
const WomensPage = ({ match }) => {
  let womensPage = useRef(null);
  useEffect(() => {
    TweenMax.to(womensPage, 0, { css: { visibility: "visible" } });
  });
  return (
    <div ref={(el) => (womensPage = el)} className="womens-page">
      <Switch>
        <Route exact path={`${match.path}`} component={WomensComponent} />
        <Route exact path={`/${match.path}/new-in`} component={WomensNewIn} />
        <Route
          exact
          path={`/${match.path}/clothing`}
          component={WomensClothing}
        />
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
