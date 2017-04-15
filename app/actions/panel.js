import { onPedidoNuevo, onPedidoFinalizado } from "../utils/socket";

export const AGREGAR_PEDIDO = "AGREGAR_PEDIDO";
export const ELIMINAR_PEDIDO = "ELIMINAR_PEDIDO";

export function agregarPedido(pedido) {
  return {
    type: AGREGAR_PEDIDO,
    pedido
  };
}

export function eliminarPedido(indice) {
  return {
    type: ELIMINAR_PEDIDO,
    indice
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
