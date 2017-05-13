import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Pedido.css";

const propTypes = {
  nombre: PropTypes.string.isRequired,
  prioridad: PropTypes.number.isRequired,
  fechaSolicitud: PropTypes.instanceOf(Date).isRequired,
  ordenes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    cantidad: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
  })).isRequired
};

class Pedido extends Component {
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

Pedido.propTypes = propTypes;

export default Pedido;
