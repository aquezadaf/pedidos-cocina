import React, { Component } from "react";

export class DetallePedido extends Component {
  props: {
    id: number,
    nombre: string,
    fechaSolicitud: Date,
    ordenes: Array<{
      id: number,
      cantidad: number,
      nombre: string
    }>
  };

  render() {
    const { id, nombre, fechaSolicitud, ordenes } = this.props;
    return (
      <div>
        <h1>{id} x {nombre}</h1>
        <div>
          {ordenes.map(orden =>
            <div key={orden.id}>
              {orden.cantidad} x {orden.nombre}
            </div>
          )}
        </div>
        <div>
          {fechaSolicitud.toLocaleString()}
        </div>
      </div>
    );
  }
}
