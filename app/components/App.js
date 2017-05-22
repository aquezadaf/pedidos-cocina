// @flow
import React from "react";
import type { Children } from "react";
import MenuNavegacion from "./MenuNavegacion";
import style from "./App.css";

type Props = {
  children: Children
};

export default ({ children }: Props) => (
  <div className={style.app}>
    <div className={style.menu}>
      <MenuNavegacion />
    </div>
    <div className={style.contenido}>
      {children}
    </div>
  </div>
);
