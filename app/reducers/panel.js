import { AGREGAR_PEDIDO, ELIMINAR_PEDIDO } from "../actions/panel";

export default function panel(state = [], action) {
  switch (action.type) {
    case AGREGAR_PEDIDO:
      return [
        ...state,
        action.pedido
      ];
    case ELIMINAR_PEDIDO:
      return [
        ...state.slice(0, action.indice),
        ...state.slice(action.indice + 1)
      ];
    default:
      return state;
  }
}
