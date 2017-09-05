// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./Reserva.css";

export default class Reserva extends Component {
  props: {
    id: number,
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
    const { id, ordenes } = this.props;
    return (
      <div className={style.reserva}>
        <Link to={`/reservas/${id}`} className={style.hora}>
          <span className={style.textoHora}>Hora Reserva</span> {this.horaReserva()}
        </Link>
        <div className={style.ordenes}>
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
