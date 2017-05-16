import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

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
    if (estaCargando) {
      return <Spinner />;
    }
    return (
      <div>
        <ul>
          {platosMenu.map((platoMenu) => (
            <li key={platoMenu}>
              {platoMenu}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

MenuRestaurante.propTypes = propTypes;

export default MenuRestaurante;
