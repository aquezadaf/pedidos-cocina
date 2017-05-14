import React from "react";
import { Switch, Route } from "react-router";
import App from "./containers/App";
import TableroPedidosPage from "./containers/TableroPedidosPage";

export default () => (
  <App>
    <Switch>
      <Route path="/" component={TableroPedidosPage} />
    </Switch>
  </App>
);
