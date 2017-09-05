import React from "react";
import style from "./DetalleElemento.css";

type Props = {
  nombre: string,
  fechaSolicitud: Date,
  ordenes: Array<{
    id: number,
    nombre: string,
    precio: number,
    tiempoAproximadoPreparacion: number,
    cantidad: number
  }>
};

export default (detalle: Props) => {
  const { nombre, fechaSolicitud, ordenes } = detalle;
  return (
    <div className={style.detalle}>
      <h1 className={style.nombre}>{nombre}</h1>
      <div className={style.botonera}>
        <button className={`${style.boton} ${style.botonFinalizar}`}>Finalizar</button>
        <button className={`${style.boton} ${style.botonAnular}`}>Anular</button>
      </div>
      <h5>Hora solicitud: {fechaSolicitud.toLocaleTimeString()}</h5>
      <h5>Tiempo aproximado preparacion: 25 minutos</h5>
      <h5>Ordenes:</h5>
      <div className={style.ordenes}>
        {ordenes.map(orden => (
          <div key={orden.id} className={style.orden}>
            <div className={style.tituloOrden}>{orden.nombre}</div>
            <div className={style.detalleOrden}>
              <div>Cantidad platos: {orden.cantidad}</div>
              <div>Precio plato: {orden.precio}</div>
              <div>Tiempo aproximado preparacion: {orden.tiempoAproximadoPreparacion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
