import * as eventosWebSocket from "../utils/eventosWebSocket";

export const AGREGAR_PEDIDO = "AGREGAR_PEDIDO";
export const ELIMINAR_PEDIDO = "ELIMINAR_PEDIDO";
export const AUMENTAR_PRIORIDAD_PEDIDO = "AUMENTAR_PRIORIDAD_PEDIDO";
export const SUBSCRIBIR_CAMBIOS_PEDIDOS = "SUBSCRIBIR_CAMBIOS_PEDIDOS";

export const agregarPedido = (pedido) => ({
  type: AGREGAR_PEDIDO,
  pedido
});

export const eliminarPedido = (id) => ({
  type: ELIMINAR_PEDIDO,
  id
});

export const aumentarPrioridadPedido = (id) => ({
  type: AUMENTAR_PRIORIDAD_PEDIDO,
  id
});

const cambiarTipoFechaSolicitud = (pedido) => {
  if (typeof pedido.fechaSolicitud === "string") {
    return {
      ...pedido,
      fechaSolicitud: new Date(pedido.fechaSolicitud)
    };
  }
  return pedido;
};

const agregarPedidoWebSocket = (pedido) => agregarPedido(cambiarTipoFechaSolicitud(pedido));

export const subscribirCambiosPedidos = () => ({
  type: SUBSCRIBIR_CAMBIOS_PEDIDOS,
  meta: { subscribirWebSocket: true },
  socketActions: [{
    eventoSocket: eventosWebSocket.PEDIDO_NUEVO,
    actionCreator: agregarPedidoWebSocket
  }, {
    eventoSocket: eventosWebSocket.PEDIDO_FINALIZADO,
    actionCreator: eliminarPedido
  }, {
    eventoSocket: eventosWebSocket.PEDIDO_AUMENTAR_PRIORIDAD,
    actionCreator: aumentarPrioridadPedido
  }]
});
