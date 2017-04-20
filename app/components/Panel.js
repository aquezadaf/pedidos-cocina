import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Pedido from "./Pedido";
import style from "./Panel.css";

export default class Panel extends Component {
  constructor(props) {
    super(props);
    props.subscribirCambiosPanel();
  }

  props: {
    pedidos: [],
    subscribirCambiosPanel: () => void
  }

  render() {
    const { pedidos } = this.props;
    return (
      <div className={style.panel}>
        <h1 className={style.titulo}>Panel pedidos</h1>
        <FlipMove className={style.pedidos} duration={500} easing="ease-out">
          {
            pedidos.map((pedido) => (
              <Pedido
                key={pedido.id}
                nombre={pedido.nombre}
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
