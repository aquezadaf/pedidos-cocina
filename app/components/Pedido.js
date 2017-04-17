import React, { Component } from "react";
import style from "./Pedido.css";

export default class Pedido extends Component {
  props: {
    nombre: string
  }

  render() {
    const { nombre } = this.props;
    return (
      <div className={style.pedido}>
        {nombre}
      </div>
    );
  }
}
