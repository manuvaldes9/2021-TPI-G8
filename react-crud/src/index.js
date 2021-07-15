import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from '@auth0/auth0-react'
import { HashRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  
  <HashRouter>
    <React.StrictMode>
      <Auth0Provider domain="grupo8-tpi.us.auth0.com" clientId="CXKqDkfXlEjROqsE4X6vTvElHHuqYBxc" redirectUri={window.location.origin}>
      <App />
      </Auth0Provider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();