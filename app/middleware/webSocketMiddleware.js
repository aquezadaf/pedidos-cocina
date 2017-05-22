export const SUBSCRIBIR_WEBSOCKET = "SUBSCRIBIR_WEBSOCKET";

const validarAction = (actionSubscripcion) => {
  if (!actionSubscripcion.socketActions) {
    throw new Error("No se encontro propiedad socketActions");
  }
  if (!Array.isArray(actionSubscripcion.socketActions)) {
    throw new Error("La propiedad socketActions debe ser un arreglo");
  }
};

const webSocketMiddleware = socket => {
  const eventosSubscritos = [];

  const debeSubscribirEvento = (actionCreator) => {
    const { eventoSocket } = actionCreator;
    return eventosSubscritos.indexOf(eventoSocket) === -1;
  };

  const subscribirEvento = (actionCreator, next) => {
    socket.on(actionCreator.eventoSocket, (datosSocket) => {
      next(actionCreator.actionCreator(datosSocket));
    });
    eventosSubscritos.push(actionCreator.eventoSocket);
  };

  const middleware = () => next => action => {
    if (!action || !action[SUBSCRIBIR_WEBSOCKET]) {
      return next(action);
    }

    validarAction(action[SUBSCRIBIR_WEBSOCKET]);
    const { socketActions } = action[SUBSCRIBIR_WEBSOCKET];

    socketActions.forEach((actionCreator) => {
      if (debeSubscribirEvento(actionCreator)) {
        subscribirEvento(actionCreator, next);
      }
    });
  };
  return middleware;
};

export default webSocketMiddleware;
