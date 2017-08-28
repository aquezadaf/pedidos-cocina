import { LLAMAR_API } from "../middleware/apiMiddleware";

export const SOLICITAR_RESERVAS = "SOLICITAR_RESERVAS";
export const CARGAR_RESERVAS = "CARGAR_RESERVAS";
export const ERROR_SOLICITUD_RESERVAS = "ERROR_SOLICITUD_RESERVAS";

const cambiarTipoFechaSolicitud = (reserva) => {
  if (typeof reserva.fechaSolicitud === "string") {
    return {
      ...reserva,
      fechaSolicitud: new Date(reserva.fechaSolicitud)
    };
  }
  return reserva;
};

const debeObtenerReservas = ({ tableroReservas }) => {
  if (tableroReservas.estaCargando) {
    return false;
  } else if (tableroReservas.reservas && tableroReservas.reservas.length > 0) {
    return false;
  }
  return true;
};

export const solicitarReservas = () => ({
  [LLAMAR_API]: {
    types: [SOLICITAR_RESERVAS, CARGAR_RESERVAS, ERROR_SOLICITUD_RESERVAS],
    endpoint: "reservas",
    nombrePayloadFetch: "reservas",
    llamarApi: debeObtenerReservas,
    procesarResultados: (reservas) => reservas.map(cambiarTipoFechaSolicitud)
  }
});
