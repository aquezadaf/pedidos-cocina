import React from "react";
import { Switch, Route } from "react-router";
import App from "./components/App";
import TableroPedidosPage from "./containers/TableroPedidosPage";

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={TableroPedidosPage} />
    </Switch>
  </App>
);
