import React, { lazy, Suspense, useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import { Route, Switch } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
const WomensComponent = lazy(() => import("./WomensComponent"));
const WomensClothing = lazy(() => import("./womensclothing/WomensClothing"));
const WomensNewIn = lazy(() => import("./newin/WomensNewIn"));
const WomensShoes = lazy(() => import("./womensshoes/WomensShoes"));
const WomensAccessories = lazy(() =>
  import("./womensaccessories/WomensAccessories")
);
const WomensActivewear = lazy(() =>
  import("./womensactivewear/WomensActivewear")
);
const WomensPage = ({ match }) => {
  let womensPage = useRef(null);
  useEffect(() => {
    TweenMax.to(womensPage, 0, { css: { visibility: "visible" } });
  });
  return (
    <div ref={(el) => (womensPage = el)} className="womens-page">
      <Switch>
        <Suspense fallback={Spinner}>
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
        </Suspense>
      </Switch>
    </div>
  );
};

export default WomensPage;
