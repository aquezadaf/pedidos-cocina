import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import tableroPedidos from "../reducers/tableroPedidos";
import menuRestaurante from "../reducers/menuRestaurante";

const rootReducer = combineReducers({
  routing,
  tableroPedidos,
  menuRestaurante
});

export default rootReducer;
