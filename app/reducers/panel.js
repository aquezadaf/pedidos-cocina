import {
  AGREGAR_PEDIDO,
  ELIMINAR_PEDIDO,
  AUMENTAR_PRIORIDAD_PEDIDO
} from "../actions/panel";

export default function panel(state = [], action) {
  switch (action.type) {
    case AGREGAR_PEDIDO:
      if (state.find((pedido) => pedido.id === action.pedido.id)) {
        console.log("REPETIDO");
        return state;
      }
      console.log("NUEVO");
      return [
        ...state,
        action.pedido
      ];
    case ELIMINAR_PEDIDO:
      return state.filter((pedido) => pedido.id !== action.id);
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
    default:
      return state;
  }
}
