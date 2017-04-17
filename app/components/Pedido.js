import React, { Component } from "react";
import style from "./Pedido.css";

export default class Pedido extends Component {
  props: {
    nombre: string,
    fechaSolicitud: Date
  }

  render() {
    const { nombre, fechaSolicitud } = this.props;
    return (
      <div className={style.pedido}>
        <div className={style.detalle}>
          {nombre}
        </div>
        <div className={style.fecha}>
          {fechaSolicitud}
        </div>
      </div>
    );
  }
}
