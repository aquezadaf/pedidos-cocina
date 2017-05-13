import React, { Component } from "react";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";
import Pedido from "./Pedido";
import style from "./TableroPedidos.css";

const propTypes = {
  pedidos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    prioridad: PropTypes.number.isRequired,
    fechaSolicitud: PropTypes.instanceOf(Date).isRequired,
    ordenes: PropTypes.array.isRequired
  })).isRequired,
  subscribirCambiosPedidos: PropTypes.func.isRequired
};

class TableroPedidos extends Component {
  static compararPrioridadPedidos(primerPedido, segundoPedido) {
    return segundoPedido.prioridad - primerPedido.prioridad;
  }

  constructor(props) {
    super(props);
    props.subscribirCambiosPedidos();
  }

  pedidosOrdenados() {
    const { pedidos } = this.props;
    // Se clona los pedidos para no modificarlos con sort
    return []
      .concat(pedidos)
      .sort(TableroPedidos.compararPrioridadPedidos);
  }

  render() {
    return (
      <div className={style.tablero}>
        <h1 className={style.titulo}>Tablero pedidos</h1>
        <FlipMove className={style.pedidos} duration={500} easing="ease-out">
          {
            this.pedidosOrdenados()
              .map((pedido) => (
                <Pedido key={pedido.id} {...pedido} />
              ))
          }
        </FlipMove>
      </div>
    );
  }
}

TableroPedidos.propTypes = propTypes;

export default TableroPedidos;
