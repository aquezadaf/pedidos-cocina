export const SUBSCRIBIR_WEBSOCKET = "SUBSCRIBIR_WEBSOCKET";

const webSocketMiddleware = socket => () => next => action => {
  if (!action || !action[SUBSCRIBIR_WEBSOCKET]) {
    return next(action);
  }
  const { socketActions } = action[SUBSCRIBIR_WEBSOCKET];
  socketActions.forEach((actionCreator) => {
    socket.on(actionCreator.eventoSocket, (datosSocket) => {
      next(actionCreator.actionCreator(datosSocket));
    });
  });
};

export default webSocketMiddleware;
