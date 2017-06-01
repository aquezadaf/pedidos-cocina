// @flow
import React, { Component } from "react";
import style from "./PlatoMenu.css";

export default class PlatoMenu extends Component {
  props: {
    id: number,
    nombre: string,
    descripcion: string,
    tiempoAproximadoPreparacion: number,
    urlFotoPlato: string,
    habilitado: boolean,
    habilitarPlatoMenu: (id: number) => void,
    deshabilitarPlatoMenu: (id: number) => void
  }

  generarBotonPlatoMenu() {
    const { habilitado, id, habilitarPlatoMenu, deshabilitarPlatoMenu } = this.props;
    if (habilitado) {
      const claseBoton = `${style.boton} ${style.botonDeshabilitar}`;
      const funcionDeshabilitado = () => deshabilitarPlatoMenu(id);
      return <button className={claseBoton} onClick={funcionDeshabilitado}>Deshabilitar</button>;
    }
    const claseBoton = `${style.boton} ${style.botonHabilitar}`;
    const funcionHabilitado = () => habilitarPlatoMenu(id);
    return <button className={claseBoton} onClick={funcionHabilitado}>Habilitar</button>;
  }

  render() {
    const { nombre, descripcion, tiempoAproximadoPreparacion, urlFotoPlato } = this.props;
    return (
      <div className={style.platoMenu}>
        <h4 className={style.tituloPlatoMenu}>
          {nombre}
        </h4>
        <div className={style.contenidoPlatoMenu}>
          <div className={style.contenedorFotoBoton}>
            <img className={style.fotoPlato} src={urlFotoPlato} alt={nombre} />
            {this.generarBotonPlatoMenu()}
          </div>
          <div className={style.descripcionPlato}>
            <div>
              {descripcion}
            </div>
            <div>
              Tiempo preparacion: {tiempoAproximadoPreparacion} minutos
            </div>
          </div>
        </div>
      </div>
    );
  }
}
