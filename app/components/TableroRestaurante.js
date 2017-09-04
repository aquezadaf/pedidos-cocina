import React from "react";
import type { Children } from "react";
import style from "./TableroRestaurante.css";

type Props = {
  TableroPedidos: Children,
  TableroReservas: Children
};

export default ({ TableroPedidos, TableroReservas }: Props) => (
  <div className={style.tablero}>
    <div className={style.pedidos}>
      <TableroPedidos />
    </div>
    <div className={style.separador} />
    <div className={style.reservas}>
      <TableroReservas />
    </div>
  </div>
);
