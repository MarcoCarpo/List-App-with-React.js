import React from "react";
import ReactDOM from "react-dom";

import { AppProvider } from "./context";

import App from "./containers/App/App";
import "./scss/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
