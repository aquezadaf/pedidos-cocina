import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import style from "./FormularioInicioSesion.css";

export default class FormularioInicioSesion extends Component {
  state: { inicioSesion: boolean };

  constructor() {
    super();
    this.state = { inicioSesion: false };
  }

  iniciarSesion = () => {
    this.setState({ inicioSesion: true });
  };

  render() {
    const { inicioSesion } = this.state;
    if (inicioSesion) {
      return <Redirect to={"/restaurante"} />;
    }

    return (
      <div className={style.box}>
        <div className={style.formulario}>
          <div className={style.tag}>Reserva Ya!</div>
          <div>Inicia sesión para configurar tu cocina</div>
          <div>
            <input type="text" id="inputName" placeholder="Usuario" />
          </div>
          <div>
            <input type="password" id="inputPassword" placeholder="Contraseña" />
          </div>
          <div>
            <button type="submit" className={style.btn} onClick={this.iniciarSesion}>
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}
