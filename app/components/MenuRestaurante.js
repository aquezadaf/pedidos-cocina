// @flow
import React, { Component } from "react";
import style from "./MenuRestaurante.css";

export default class MenuRestaurante extends Component {
  props: {
    platosMenu: Array<{
      id: number,
      nombre: string,
      descripcion: string,
      precio: number,
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
          platosMenu.map((platoMenu) => (
            <div key={platoMenu.id} className={style.platoMenu}>
              <h4 className={style.tituloPlatoMenu}>
                {platoMenu.nombre}
              </h4>
              <div className={style.contenidoPlatoMenu}>
                <div className={style.contenedorFotoBoton}>
                  <img
                    className={style.fotoPlato}
                    src={platoMenu.urlFotoPlato}
                    alt={platoMenu.nombre}
                  />
                  {MenuRestaurante.generarBotonPlatoMenu(platoMenu.habilitado)}
                </div>
                <div className={style.descripcionPlato}>
                  <div>
                    {platoMenu.descripcion}
                  </div>
                  <div>
                    Precio: $ {platoMenu.precio}
                  </div>
                  <div>
                    Tiempo preparacion: {platoMenu.tiempoAproximadoPreparacion} minutos
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
