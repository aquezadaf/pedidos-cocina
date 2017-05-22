export const SUBSCRIBIR_WEBSOCKET = "SUBSCRIBIR_WEBSOCKET";

const validarAction = (actionSubscripcion) => {
  if (!actionSubscripcion.socketActions) {
    throw new Error("No se encontro propiedad socketActions");
  }
  if (!Array.isArray(actionSubscripcion.socketActions)) {
    throw new Error("La propiedad socketActions debe ser un arreglo");
  }
};

const webSocketMiddleware = socket => () => next => action => {
  if (!action || !action[SUBSCRIBIR_WEBSOCKET]) {
    return next(action);
  }
  validarAction(action[SUBSCRIBIR_WEBSOCKET]);
  const { socketActions } = action[SUBSCRIBIR_WEBSOCKET];
  socketActions.forEach((actionCreator) => {
    socket.on(actionCreator.eventoSocket, (datosSocket) => {
      next(actionCreator.actionCreator(datosSocket));
    });
  });
};

export default webSocketMiddleware;
