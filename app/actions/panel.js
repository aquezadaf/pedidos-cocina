import { onPedidoNuevo, onPedidoFinalizado } from "../utils/socket";

export const AGREGAR_PEDIDO = "AGREGAR_PEDIDO";
export const ELIMINAR_PEDIDO = "ELIMINAR_PEDIDO";
export const AUMENTAR_PRIORIDAD_PEDIDO = "AUMENTAR_PRIORIDAD_PEDIDO";

export function agregarPedido(pedido) {
  return {
    type: AGREGAR_PEDIDO,
    pedido
  };
}

export function eliminarPedido(id) {
  return {
    type: ELIMINAR_PEDIDO,
    id
  };
}

export function aumentarPrioridadPedido(id) {
  return {
    type: AUMENTAR_PRIORIDAD_PEDIDO,
    id
  };
}

export function subscribirCambiosPanel() {
  return (dispatch) => {
    onPedidoNuevo((pedido) => {
      dispatch(agregarPedido(pedido));
    });
    onPedidoFinalizado((indice) => {
      dispatch(eliminarPedido(indice));
    });
  };
}
