import { combineReducers } from "redux";
import { CARGAR_RESERVAS, SOLICITAR_RESERVAS } from "../actions/tableroReservas";

const reservas = (state = [], action) => {
  switch (action.type) {
    case CARGAR_RESERVAS:
      return action.reservas;
    default:
      return state;
  }
};

const estaCargando = (state = false, action) => {
  switch (action.type) {
    case SOLICITAR_RESERVAS:
      return true;
    case CARGAR_RESERVAS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  reservas,
  estaCargando
});
