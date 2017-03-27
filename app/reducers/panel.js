import { AGREGAR_PEDIDO, ELIMINAR_PEDIDO } from "../actions/panel";

export default function panel(state = [], action) {
  switch (action.type) {
    case AGREGAR_PEDIDO:
      return state;
    case ELIMINAR_PEDIDO:
      return state;
    default:
      return state;
  }
}
