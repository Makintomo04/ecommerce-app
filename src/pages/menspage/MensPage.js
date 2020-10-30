import React, { lazy, Suspense, useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import { Route, Switch } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
const MensComponent = lazy(() => import("./MensComponent"));
const MensShoes = lazy(() => import("./mensshoes/MensShoes"));
const MensActivewear = lazy(() => import("./mensactivewear/MensActivewear"));
const MensClothing = lazy(() => import("./mensclothing/MensClothing"));
const NewIn = lazy(() => import("./newin/NewIn"));
const MensAccessories = lazy(() => import("./mensaccessories/MensAccessories"));

const MensPage = ({ match }) => {
  let mensPage = useRef(null);
  useEffect(() => {
    TweenMax.to(mensPage, 0, { css: { visibility: "visible" } });
  }, []);
  return (
    <div ref={(el) => (mensPage = el)} className="mens-page">
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path={`${match.path}`} component={MensComponent} />
          <Route exact path={`/${match.path}/new-in`} component={NewIn} />
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
          <Route
            path={`/${match.path}/activewear`}
            component={MensActivewear}
          />
        </Suspense>
      </Switch>
    </div>
  );
};

export default MensPage;
