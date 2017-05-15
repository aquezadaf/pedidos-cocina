import React, { Component } from "react";
import style from "./MenuNavegacion.css";

export default class MenuNavegacion extends Component {
  render() {
    return (
      <div className={style.menuNavegacion}>
        <ul className={style.listaMenu}>
          <li>Inicio</li>
          <li>Pedidos</li>
          <li>Reservas</li>
          <li>Menu</li>
          <li>Configuración</li>
        </ul>
      </div>
    );
  }
}
