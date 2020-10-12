import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
