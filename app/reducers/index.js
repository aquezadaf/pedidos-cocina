import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import panel from "../reducers/panel";

const rootReducer = combineReducers({
  routing,
  panel
});

export default rootReducer;
