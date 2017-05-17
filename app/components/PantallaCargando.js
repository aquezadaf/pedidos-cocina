import React from "react";
import style from "./Spinner.css";

export default () => (
  <div className={style.spinner}>
    <div>
      <i className="fa fa-refresh fa-spin fa-3x fa-fw" />
    </div>
    <div className={style.texto}>Cargando...</div>
  </div>
);
