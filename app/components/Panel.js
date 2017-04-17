import React, { Component } from "react";
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
        <div className={style.pedidos}>
          {
            pedidos.map((pedido) => (
              <div key={pedido.id} className={style.pedido}>
                {pedido.nombre}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
