import React, { Component } from "react";

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
