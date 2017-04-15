import io from "socket.io-client";

const socket = io("http://localhost:8080");

export function onConnect(cb) {
  socket.on("connect", cb);
}

export function onDisconnect(cb) {
  socket.on("disconnect", cb);
}

export function onPedidoNuevo(cb) {
  socket.on("pedidoNuevo", cb);
}

export function onPedidoFinalizado(cb) {
  socket.on("pedidoFinalizado", cb);
}
