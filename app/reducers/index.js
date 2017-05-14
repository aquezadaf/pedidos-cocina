import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import pedidos from "../reducers/tableroPedidos";

const rootReducer = combineReducers({
  routing,
  pedidos
});

export default rootReducer;
