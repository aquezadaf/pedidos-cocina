import React, { Component } from "react";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";
import Pedido from "./Pedido";
import style from "./Panel.css";

const propTypes = {
  pedidos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    prioridad: PropTypes.number.isRequired,
    fechaSolicitud: PropTypes.instanceOf(Date).isRequired,
    ordenes: PropTypes.array.isRequired
  })).isRequired,
  subscribirCambiosPanel: PropTypes.func.isRequired
};

class Panel extends Component {
  static compararPrioridadPedidos(primerPedido, segundoPedido) {
    return segundoPedido.prioridad - primerPedido.prioridad;
  }

  constructor(props) {
    super(props);
    props.subscribirCambiosPanel();
  }

  pedidosOrdenados() {
    const { pedidos } = this.props;
    // Se clona los pedidos para no modificarlos con sort
    return []
      .concat(pedidos)
      .sort(Panel.compararPrioridadPedidos);
  }

  render() {
    return (
      <div className={style.panel}>
        <h1 className={style.titulo}>Panel pedidos</h1>
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

Panel.propTypes = propTypes;

export default Panel;
