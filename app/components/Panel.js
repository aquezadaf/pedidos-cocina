import React, { Component } from "react";

export default class Panel extends Component {
  props: {
    pedidos: []
  }

  render() {
    const { pedidos } = this.props;
    return (
      <div>
        <h1>Panel pedidos</h1>
        <ul>
          {
            pedidos.map((pedido) => <li key={pedido.id}>{pedido.nombre}</li>)
          }
        </ul>
      </div>
    );
  }
}
