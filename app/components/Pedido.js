import React, { Component } from "react";
import style from "./Pedido.css";

export default class Pedido extends Component {
  props: {
    nombre: string,
    prioridad: number,
    fechaSolicitud: Date,
    ordenes: Array
  }

  render() {
    const { nombre, fechaSolicitud, ordenes, prioridad } = this.props;
    return (
      <div className={style.pedido}>
        <div className={style.nombre}>
          ({prioridad}) {nombre}
        </div>
        <div className={style.ordenes}>
          {
            ordenes.map((orden) => (
              <div key={orden.id} className={style.orden}>
                {orden.cantidad} x {orden.nombre}
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
