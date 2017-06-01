// @flow
import React, { Component } from "react";
import PlatoMenu from "./PlatoMenu";
import style from "./MenuRestaurante.css";

export default class MenuRestaurante extends Component {
  props: {
    platosMenu: Array<{
      id: number,
      nombre: string,
      descripcion: string,
      tiempoAproximadoPreparacion: number,
      urlFotoPlato: string,
      habilitado: boolean
    }>,
    solicitarMenuRestaurante: () => void,
    habilitarPlatoMenu: (id: number) => void,
    deshabilitarPlatoMenu: (id: number) => void
  }

  componentDidMount() {
    this.props.solicitarMenuRestaurante();
  }

  render() {
    const { platosMenu, habilitarPlatoMenu, deshabilitarPlatoMenu } = this.props;
    return (
      <div className={style.menu}>
        {
          platosMenu.map((platoMenu) => (
            <PlatoMenu
              key={platoMenu.id}
              habilitarPlatoMenu={habilitarPlatoMenu}
              deshabilitarPlatoMenu={deshabilitarPlatoMenu}
              {...platoMenu}
            />
          ))
        }
      </div>
    );
  }
}
