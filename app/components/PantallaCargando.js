// @flow
import React from "react";
import type { Children } from "react";
import style from "./PantallaCargando.css";

type Props = {
  estaCargando: boolean,
  children: Children
};

const PantallaCargando = ({ estaCargando, children }: Props) => {
  if (estaCargando) {
    return (
      <div className={style.spinner}>
        <div>
          <i className="fa fa-refresh fa-spin fa-3x fa-fw" />
        </div>
        <div className={style.texto}>Cargando...</div>
      </div>
    );
  }
  return children;
};

export default PantallaCargando;

export const conectarPantallaCargando = (Componente) => (props) => (
  <PantallaCargando {...props}>
    <Componente {...props} />
  </PantallaCargando>
);
