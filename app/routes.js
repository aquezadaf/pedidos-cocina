import React from "react";
import { Switch, Route } from "react-router";
import App from "./components/App";
import FormularioInicioSesion from "./components/FormularioInicioSesion";
import TableroRestaurantePage from "./containers/TableroRestaurantePage";
import TableroPedidosPage from "./containers/TableroPedidosPage";
import MenuRestaurantePage from "./containers/MenuRestaurantePage";
import TableroReservasPage from "./containers/TableroReservasPage";

export default () => (
  <Switch>
    <Route exact path="/" component={FormularioInicioSesion} />
    <App>
      <Route exact path="/restaurante" component={TableroRestaurantePage} />
      <Route exact path="/reservas" component={TableroReservasPage} />
      <Route exact path="/menu" component={MenuRestaurantePage} />
      <Route exact path="/pedidos" component={TableroPedidosPage} />
    </App>
  </Switch>
);
