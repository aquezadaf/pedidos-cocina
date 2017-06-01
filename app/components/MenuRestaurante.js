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
    solicitarMenuRestaurante: () => {}
  }

  static generarBotonPlatoMenu(platoHabilitado: boolean) {
    if (platoHabilitado) {
      const claseBoton = `${style.boton} ${style.botonDeshabilitar}`;
      return <button className={claseBoton}>Deshabilitar</button>;
    }
    const claseBoton = `${style.boton} ${style.botonHabilitar}`;
    return <button className={claseBoton}>Habilitar</button>;
  }

  componentDidMount() {
    this.props.solicitarMenuRestaurante();
  }

  render() {
    const { platosMenu } = this.props;
    return (
      <div className={style.menu}>
        {
          platosMenu.map((platoMenu) => <PlatoMenu key={platoMenu.id} {...platoMenu} />)
        }
      </div>
    );
  }
}
