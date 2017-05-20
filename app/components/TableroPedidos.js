import React, { Component } from "react";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";
import Pedido from "./Pedido";
import style from "./TableroPedidos.css";

const propTypes = {
  tableroPedidos: PropTypes.shape({
    pedidos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      prioridad: PropTypes.number.isRequired,
      fechaSolicitud: PropTypes.instanceOf(Date).isRequired,
      ordenes: PropTypes.array.isRequired
    })).isRequired
  }).isRequired,
  subscribirCambiosPedidos: PropTypes.func.isRequired,
  solicitarPedidos: PropTypes.func.isRequired
};

class TableroPedidos extends Component {
  // Ordenan los pedidos segun su prioridad de manera descendente
  // y luego por su fecha de solicitud de manera ascendente
  static determinarOrdenPedidos(primerPedido, segundoPedido) {
    const diferenciaPrioridad = segundoPedido.prioridad - primerPedido.prioridad;
    if (diferenciaPrioridad !== 0) {
      return diferenciaPrioridad;
    }
    return primerPedido.fechaSolicitud - segundoPedido.fechaSolicitud;
  }

  constructor(props) {
    super(props);
    props.solicitarPedidos();
    props.subscribirCambiosPedidos();
  }

  pedidosOrdenados() {
    const { pedidos } = this.props.tableroPedidos;
    // Se clona los pedidos para no modificarlos con sort
    return []
      .concat(pedidos)
      .sort(TableroPedidos.determinarOrdenPedidos);
  }

  render() {
    return (
      <div className={style.tablero}>
        <FlipMove duration={500} easing="ease-out" className={style.pedidos}>
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
