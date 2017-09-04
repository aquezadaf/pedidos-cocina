import React from "react";
import style from "./FormularioInicioSesion.css";

export default () => (
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
        <button type="submit" className={style.btn}>
            Iniciar sesión
          </button>
      </div>
    </div>
  </div>
  );
