import React from "react";
import PropTypes from "prop-types";
import MenuNavegacion from "./MenuNavegacion";

const propTypes = {
  children: PropTypes.element.isRequired
};

const App = ({ children }) => (
  <div>
    <MenuNavegacion />
    <div>
      {children}
    </div>
  </div>
);

App.propTypes = propTypes;

export default App;
