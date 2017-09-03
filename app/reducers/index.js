import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import tableroPedidos from "../reducers/tableroPedidos";
import tableroReservas from "../reducers/tableroReservas";
import menuRestaurante from "../reducers/menuRestaurante";

const rootReducer = combineReducers({
  routing,
  tableroPedidos,
  tableroReservas,
  menuRestaurante
});

export default rootReducer;
