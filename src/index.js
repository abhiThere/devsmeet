import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FavoritesContextProvider from "./store/favorites-context";
import { MeetupsContextProvider } from "./store/meetups-context";

ReactDOM.render(
  <MeetupsContextProvider>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </MeetupsContextProvider>,
  document.getElementById("root")
);
