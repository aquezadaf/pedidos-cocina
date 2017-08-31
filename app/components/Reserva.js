// @flow
import React, { Component } from "react";
import style from "./Reserva.css";

export default class Reserva extends Component {
  props: {
    nombre: string,
    fechaReserva: Date,
    ordenes: Array<{
      id: number,
      cantidad: number,
      nombre: string
    }>
  };

  static formatearUnidadHora(unidad) {
    if (unidad < 10) {
      return `0${unidad}`;
    }
    return unidad;
  }

  horaReserva() {
    const { fechaReserva } = this.props;
    const horas = Reserva.formatearUnidadHora(fechaReserva.getHours());
    const minutos = Reserva.formatearUnidadHora(fechaReserva.getMinutes());
    return `${horas}:${minutos}`;
  }

  render() {
    const { nombre, fechaReserva, ordenes } = this.props;

    console.log(fechaReserva, typeof fechaReserva);

    return (
      <div className={style.reserva}>
        <div className={style.nombre}>{nombre}</div>
        <div className={style.ordenes}>
          Fecha reserva: ({this.horaReserva()})
          {ordenes.map(orden => (
            <div key={orden.id} className={style.orden}>
              {orden.cantidad} x {orden.nombre}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
