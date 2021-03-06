// @flow
import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Reserva from "./Reserva";
import style from "./TableroReservas.css";

type ReservaType = {
  id: number,
  nombre: string,
  fechaReserva: Date,
  ordenes: Array<{
    id: number,
    cantidad: number,
    nombre: string
  }>
};

export default class TableroReservas extends Component {
  props: {
    reservas: Array<ReservaType>,
    solicitarReservas: () => {}
  };

  componentDidMount() {
    this.props.solicitarReservas();
  }

  render() {
    const { reservas } = this.props;
    return (
      <div className={style.tablero}>
        <FlipMove duration={500} easing="ease-out" className={style.pedidos}>
          {reservas.map(reserva => <Reserva key={reserva.id} {...reserva} />)}
        </FlipMove>
      </div>
    );
  }
}
