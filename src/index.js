import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import "semantic-ui-css/semantic.min.css";
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
