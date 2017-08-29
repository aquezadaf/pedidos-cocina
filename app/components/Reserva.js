// @flow
import React, { Component } from "react";

export default class Pedido extends Component {
  props: {
    nombre: string,
    fechaReserva: Date,
    ordenes: Array<{
      id: number,
      cantidad: number,
      nombre: string
    }>
  };

  render() {
    const { nombre, fechaReserva, ordenes } = this.props;
    return (
      <div>
        <div>
          {nombre} ({fechaReserva.toLocaleString()})
        </div>
        <div>
          {ordenes.map(orden => (
            <div key={orden.id}>
              {orden.cantidad} x {orden.nombre}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
