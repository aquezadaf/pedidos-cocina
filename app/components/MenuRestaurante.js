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
      urlFotoPlato: string
    }>,
    solicitarMenuRestaurante: () => {}
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
                <div className={style.contenedorFoto}>
                  <img
                    className={style.fotoPlato}
                    src={platoMenu.urlFotoPlato}
                    alt={platoMenu.nombre}
                  />
                </div>
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
          ))
        }
      </div>
    );
  }
}
