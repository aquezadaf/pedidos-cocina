import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.element.isRequired
};

const App = ({ children }) => (
  <div>
    {children}
  </div>
);

App.propTypes = propTypes;

export default App;
