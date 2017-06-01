import React, { Component } from "react";
import style from "./PlatoMenu.css";

export default class PlatoMenu extends Component {
  props: {
    nombre: string,
    descripcion: string,
    tiempoAproximadoPreparacion: number,
    urlFotoPlato: string,
    habilitado: boolean
  }

  generarBotonPlatoMenu() {
    if (this.props.habilitado) {
      const claseBoton = `${style.boton} ${style.botonDeshabilitar}`;
      return <button className={claseBoton}>Deshabilitar</button>;
    }
    const claseBoton = `${style.boton} ${style.botonHabilitar}`;
    return <button className={claseBoton}>Habilitar</button>;
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
