import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";
import webSocketMiddleware from "../middleware/crearWebSocketMiddleware";
import apiMiddleware from "../middleware/apiMiddleware";

const history = createBrowserHistory();
const router = routerMiddleware(history);
const api = apiMiddleware(process.env.API_URL);
const enhancer = applyMiddleware(thunk, api, webSocketMiddleware, router);
const configureStore = (initialState) => createStore(rootReducer, initialState, enhancer);

export default { configureStore, history };
