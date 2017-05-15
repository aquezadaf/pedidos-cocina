import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./MenuNavegacion.css";

const elementosMenu = [
  { path: "/", texto: "Inicio", icono: "fa-home" },
  { path: "/pedidos", texto: "Pedidos", icono: "fa-male" },
  { path: "/reservas", texto: "Reservas", icono: "fa-mobile-phone" },
  { path: "/menu", texto: "Menu", icono: "fa-cutlery" },
  { path: "/configuracion", texto: "Configuración", icono: "fa-gears" }
];

export default class MenuNavegacion extends Component {
  constructor(props) {
    super(props);
    this.state = { menuSeleccionado: "fa-home" };
  }

  seleccionarMenu(menuSeleccionado) {
    this.setState({ menuSeleccionado });
  }

  generarElementoMenu({ path, texto, icono }) {
    const claseElementoMenu = this.state.menuSeleccionado === icono
      ? style.elementoListaSeleccionado
      : style.elementoLista;
    return (
      <li key={icono} className={claseElementoMenu}>
        {
          this.generarLink(path, texto, icono)
        }
      </li>
    );
  }

  generarLink(path, texto, icono) {
    const claseIcono = `fa ${icono} fa-2x`;
    if (this.state.menuSeleccionado === icono) {
      return (
        <div className={style.link}>
          <i className={claseIcono} aria-hidden="true" />
          <div className={style.textoLink}>{texto}</div>
        </div>
      );
    }
    return (
      <Link to={path} className={style.link} onClick={this.seleccionarMenu.bind(this, icono)}>
        <i className={claseIcono} aria-hidden="true" />
        <div className={style.textoLink}>{texto}</div>
      </Link>
    );
  }

  render() {
    return (
      <div className={style.menuNavegacion}>
        <ul className={style.listaMenu}>
          {
            elementosMenu.map(((elementoMenu) => this.generarElementoMenu(elementoMenu)))
          }
        </ul>
      </div>
    );
  }
}
