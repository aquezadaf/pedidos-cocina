import io from "socket.io-client";

const socket = io(process.env.WEBSOCKET_URL);

export function onConnect(cb) {
  socket.on("connect", cb);
}

export function onDisconnect(cb) {
  socket.on("disconnect", cb);
}

export function onPedidoNuevo(cb) {
  socket.on("pedidoNuevo", (pedido) => {
    cb({
      ...pedido,
      fechaSolicitud: new Date(pedido.fechaSolicitud)
    });
  });
}

export function onPedidoFinalizado(cb) {
  socket.on("pedidoFinalizado", cb);
}

export function onPedidoAumentarPriodidad(cb) {
  socket.on("pedidoAumentarPriodidad", cb);
}
