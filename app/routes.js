import React from "react";
import { Switch, Route } from "react-router";
import App from "./components/App";
import TableroPedidosPage from "./containers/TableroPedidosPage";
import MenuRestaurantePage from "./containers/MenuRestaurantePage";
import TableroReservasPage from "./containers/TableroReservasPage";

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={TableroPedidosPage} />
      <Route exact path="/reservas" component={TableroReservasPage} />
      <Route exact path="/menu" component={MenuRestaurantePage} />
    </Switch>
  </App>
);
