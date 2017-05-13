import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router } from "react-router";
import routes from "../routes";

const propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
