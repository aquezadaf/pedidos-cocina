import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Routes from "../routes";

const propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
