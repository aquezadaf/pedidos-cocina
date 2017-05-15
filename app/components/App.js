import React from "react";
import PropTypes from "prop-types";
import MenuNavegacion from "./MenuNavegacion";
import style from "./App.css";

const propTypes = {
  children: PropTypes.element.isRequired
};

const App = ({ children }) => (
  <div className={style.app}>
    <div className={style.menu}>
      <MenuNavegacion />
    </div>
    <div className={style.contenido}>
      {children}
    </div>
  </div>
);

App.propTypes = propTypes;

export default App;
