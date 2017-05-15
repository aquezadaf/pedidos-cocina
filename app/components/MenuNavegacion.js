import React, { Component } from "react";
import style from "./MenuNavegacion.css";

export default class MenuNavegacion extends Component {
  render() {
    return (
      <div>
        <h5>Menu navegacion</h5>
        <ul>
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
