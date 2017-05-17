import React, { Component } from "react";
import PropTypes from "prop-types";
import PantallaCargando from "./PantallaCargando";

const propTypes = {
  menu: PropTypes.shape({
    platosMenu: PropTypes.arrayOf(PropTypes.string).isRequired,
    estaCargando: PropTypes.bool.isRequired
  }).isRequired,
  solicitarMenuRestaurante: PropTypes.func.isRequired
};

class MenuRestaurante extends Component {
  componentDidMount() {
    this.props.solicitarMenuRestaurante();
  }

  render() {
    const { platosMenu, estaCargando } = this.props.menu;
    return (
      <PantallaCargando estaCargando={estaCargando}>
        <div>
          <ul>
            {platosMenu.map((platoMenu) => (
              <li key={platoMenu}>
                {platoMenu}
              </li>
            ))}
          </ul>
        </div>
      </PantallaCargando>
    );
  }
}

MenuRestaurante.propTypes = propTypes;

export default MenuRestaurante;
