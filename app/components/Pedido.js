// @flow
import React, { Component } from "react";
import style from "./Pedido.css";

const coloresPrioridades = [
  style.prioridadBaja,
  style.prioridadNormal,
  style.prioridadAlta,
  style.prioridadMuyAlta
];

export default class Pedido extends Component {
  props: {
    nombre: string,
    prioridad: number,
    fechaSolicitud: Date,
    ordenes: Array<{
      id: number,
      cantidad: number,
      nombre: string
    }>
  };

  prioridadEnRangoValido(): number {
    const cantidadColores = coloresPrioridades.length - 1;
    const { prioridad } = this.props;
    if (prioridad > cantidadColores) {
      return cantidadColores;
    } else if (prioridad < 0) {
      return 0;
    }
    return prioridad;
  }

  clasePrioridadPedido(): string {
    const prioridad = this.prioridadEnRangoValido();
    return [
      style.pedido,
      coloresPrioridades[prioridad]
    ].join(" ");
  }

  render() {
    const { nombre, fechaSolicitud, ordenes } = this.props;
    const nombreClasePedido = this.clasePrioridadPedido();
    return (
      <div className={nombreClasePedido}>
        <div className={style.nombre}>
          {nombre}
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
