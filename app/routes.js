// @flow
import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import PanelPage from "./containers/PanelPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PanelPage} />
  </Route>
);
