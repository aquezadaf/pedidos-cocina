import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import TableroPedidosPage from "./containers/TableroPedidosPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TableroPedidosPage} />
  </Route>
);
