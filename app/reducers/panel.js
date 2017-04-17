import { AGREGAR_PEDIDO, ELIMINAR_PEDIDO } from "../actions/panel";

export default function panel(state = [], action) {
  switch (action.type) {
    case AGREGAR_PEDIDO:
      return [
        ...state,
        action.pedido
      ];
    case ELIMINAR_PEDIDO:
      return state.filter((pedido) => action.id !== pedido.id);
    default:
      return state;
  }
}
