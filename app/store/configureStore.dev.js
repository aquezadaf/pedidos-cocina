import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createHashHistory } from "history";
import { routerMiddleware, routerActions } from "react-router-redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import * as tableroPedidosActions from "../actions/tableroPedidos";
import webSocketMiddleware from "../middleware/crearWebSocketMiddleware";
import apiMiddleware from "../middleware/apiMiddleware";

const history = createHashHistory();

const configureStore = (initialState) => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk Middleware
  middleware.push(thunk);

  // Api Middleware
  const api = apiMiddleware(process.env.API_URL);
  middleware.push(api);

  // WebSocket middleware
  middleware.push(webSocketMiddleware);

  // Logging Middleware
  const logger = createLogger({
    level: "info",
    collapsed: true
  });
  middleware.push(logger);

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...tableroPedidosActions,
    ...routerActions,
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
      serialize: true
    })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(require("../reducers")) // eslint-disable-line global-require
    );
  }

  return store;
};

export default { configureStore, history };
