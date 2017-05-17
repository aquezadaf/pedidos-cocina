import React from "react";
import PropTypes from "prop-types";
import style from "./PantallaCargando.css";

const propTypes = {
  estaCargando: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};

const PantallaCargando = ({ estaCargando, children }) => {
  if (estaCargando) {
    return (
      <div className={style.spinner}>
        <div>
          <i className="fa fa-refresh fa-spin fa-3x fa-fw" />
        </div>
        <div className={style.texto}>Cargando...</div>
      </div>
    );
  }
  return children;
};

PantallaCargando.propTypes = propTypes;

export default PantallaCargando;
