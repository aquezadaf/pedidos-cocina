import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import pedidos from "../reducers/tableroPedidos";
import menu from "../reducers/menuRestaurante";

const rootReducer = combineReducers({
  routing,
  pedidos,
  menu
});

export default rootReducer;
