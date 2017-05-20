import { combineReducers } from "redux";
import {
  AGREGAR_PEDIDO,
  ELIMINAR_PEDIDO,
  AUMENTAR_PRIORIDAD_PEDIDO,
  SOLICITAR_PEDIDOS,
  CARGAR_PEDIDOS
} from "../actions/tableroPedidos";

const pedidos = (state = [], action) => {
  switch (action.type) {
    case AGREGAR_PEDIDO:
      if (state.find((pedido) => pedido.id === action.pedido.id)) {
        return state;
      }
      return [
        ...state,
        action.pedido
      ];
    case ELIMINAR_PEDIDO:
      return state.filter((pedido) => pedido.id !== action.id)
    case AUMENTAR_PRIORIDAD_PEDIDO:
      return state.map((pedido) => {
        if (pedido.id !== action.id) {
          return pedido;
        }
        return {
          ...pedido,
          prioridad: pedido.prioridad + 1
        };
      });
    case CARGAR_PEDIDOS:
      return action.pedidos;
    default:
      return state;
  }
};

const estaCargando = (state = false, action) => {
  switch (action.type) {
    case SOLICITAR_PEDIDOS:
      return true;
    case CARGAR_PEDIDOS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  pedidos,
  estaCargando
});
