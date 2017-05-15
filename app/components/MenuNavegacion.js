import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./MenuNavegacion.css";

const elementosMenu = [
  { texto: "Inicio", icono: "fa-home" },
  { texto: "Pedidos", icono: "fa-male" },
  { texto: "Reservas", icono: "fa-mobile-phone" },
  { texto: "Menu", icono: "fa-cutlery" },
  { texto: "Configuración", icono: "fa-gears" }
];

export default class MenuNavegacion extends Component {
  static generarElementoLista(textoLink, iconoFontAwesome) {
    const icono = `fa ${iconoFontAwesome} fa-2x`;
    return (
      <li className={style.elementoLista}>
        <Link to="/" className={style.link}>
          <i className={icono} aria-hidden="true" />
          <div className={style.textoLink}>{textoLink}</div>
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className={style.menuNavegacion}>
        <ul className={style.listaMenu}>
          {
            elementosMenu.map(((elementoMenu) => (
              MenuNavegacion.generarElementoLista(elementoMenu.texto, elementoMenu.icono)
            )))
          }
        </ul>
      </div>
    );
  }
}
