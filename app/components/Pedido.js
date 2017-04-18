import React, { Component } from "react";
import style from "./Pedido.css";

export default class Pedido extends Component {
  props: {
    nombre: string,
    fechaSolicitud: Date,
    ordenes: Array
  }

  render() {
    const { nombre, fechaSolicitud, ordenes } = this.props;
    return (
      <div className={style.pedido}>
        <div className={style.nombre}>
          {nombre}
        </div>
        <div className={style.ordenes}>
          {
            ordenes.map((orden) => (
              <div key={orden.id} className={style.orden}>
                {orden.nombre} ({orden.cantidad})
              </div>
            ))
          }
        </div>
        <div className={style.fecha}>
          {fechaSolicitud.toLocaleString()}
        </div>
      </div>
    );
  }
}
