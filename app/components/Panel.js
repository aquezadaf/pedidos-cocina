import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Pedido from "./Pedido";
import style from "./Panel.css";

export default class Panel extends Component {
  static compararPrioridadPedidos(primerPedido, segundoPedido) {
    return segundoPedido.prioridad - primerPedido.prioridad;
  }

  constructor(props) {
    super(props);
    props.subscribirCambiosPanel();
  }

  props: {
    pedidos: [],
    subscribirCambiosPanel: () => void
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
                <Pedido
                  key={pedido.id}
                  nombre={pedido.nombre}
                  prioridad={pedido.prioridad}
                  fechaSolicitud={pedido.fechaSolicitud}
                  ordenes={pedido.ordenes}
                />
              ))
          }
        </FlipMove>
      </div>
    );
  }
}
