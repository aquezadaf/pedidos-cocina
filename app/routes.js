import React from "react";
import { Switch, Route } from "react-router";
import App from "./components/App";
import TableroPedidosPage from "./containers/TableroPedidosPage";
import MenuRestaurantePage from "./containers/MenuRestaurantePage";
import DetallePedido from "./components/DetallePedido";

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={TableroPedidosPage} />
      <Route exact path="/menu" component={MenuRestaurantePage} />
      <Route exact path="/pedido/:id" component={DetallePedido} />
    </Switch>
  </App>
);
