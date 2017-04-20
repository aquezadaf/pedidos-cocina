import React, { Component } from "react";
import style from "./Pedido.css";

export default class Pedido extends Component {
  props: {
    nombre: string,
    prioridad: number,
    fechaSolicitud: Date,
    ordenes: Array
  }

  clasePrioridadPedido() {
    const coloresPrioridades = [
      style.prioridadBaja,
      style.prioridadNormal,
      style.prioridadAlta,
      style.prioridadMuyAlta
    ];

    let { prioridad } = this.props;
    if (prioridad > 3) {
      prioridad = 3;
    } else if (prioridad < 0) {
      prioridad = 0;
    }

    return [style.pedido, coloresPrioridades[prioridad]].join(" ");
  }

  render() {
    const { nombre, fechaSolicitud, ordenes, prioridad } = this.props;
    const nombreClasePedido = this.clasePrioridadPedido();
    return (
      <div className={nombreClasePedido}>
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
