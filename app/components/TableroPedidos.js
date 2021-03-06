// @flow
import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Pedido from "./Pedido";
import style from "./TableroPedidos.css";

type PedidoType = {
  id: number,
  nombre: string,
  prioridad: number,
  fechaSolicitud: Date,
  ordenes: Array<{
    id: number,
    cantidad: number,
    nombre: string
  }>
};

export default class TableroPedidos extends Component {
  props: {
    pedidos: Array<PedidoType>,
    solicitarPedidos: () => {},
    subscribirCambiosPedidos: () => {}
  };

  // Ordenan los pedidos segun su prioridad de manera descendente
  // y luego por su fecha de solicitud de manera ascendente
  static determinarOrdenPedidos(primerPedido: PedidoType, segundoPedido: PedidoType): number {
    const diferenciaPrioridad = segundoPedido.prioridad - primerPedido.prioridad;
    if (diferenciaPrioridad !== 0) {
      return diferenciaPrioridad;
    }
    return primerPedido.fechaSolicitud - segundoPedido.fechaSolicitud;
  }

  componentDidMount() {
    this.props.solicitarPedidos();
    this.props.subscribirCambiosPedidos();
  }

  pedidosOrdenados(): Array<PedidoType> {
    const { pedidos } = this.props;
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
