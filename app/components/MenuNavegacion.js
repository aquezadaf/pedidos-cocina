// @flow
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./MenuNavegacion.css";

const elementosMenu = [
  { path: "/", texto: "Inicio", icono: "fa-home" },
  { path: "/pedidos", texto: "Pedidos", icono: "fa-male" },
  { path: "/reservas", texto: "Reservas", icono: "fa-mobile-phone" },
  { path: "/menu", texto: "Menu", icono: "fa-cutlery" }
];

export default class MenuNavegacion extends Component {
  render() {
    return (
      <div className={style.menuNavegacion}>
        <ul className={style.listaMenu}>
          {
            elementosMenu.map(({ path, icono, texto }) => {
              const claseIcono = `fa ${icono} fa-2x`;
              return (
                <li key={path} className={style.elementoLista}>
                  <NavLink
                    exact to={path} className={style.link} activeClassName={style.linkActivo}
                  >
                    <i className={claseIcono} aria-hidden="true" />
                    <div className={style.textoLink}>{texto}</div>
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
