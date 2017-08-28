// @flow
import React, { Component } from "react";
import FlipMove from "react-flip-move";

type ReservaType = {
  id: number,
  nombre: string,
  fechaSolicitud: Date,
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
      <div>
        <FlipMove duration={500} easing="ease-out">
          {
            reservas.map(reserva =>
              <div key={reserva.id}>
                {reserva.nombre}
              </div>
            )
          }
        </FlipMove>
      </div>
    );
  }
}
