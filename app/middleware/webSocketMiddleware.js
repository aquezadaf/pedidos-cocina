const webSocketMiddleware = socket => ({ dispatch }) => next => action => {
  if (action.meta && action.meta.subscribirWebSocket) {
    action.socketActions.forEach((actionCreator) => {
      socket.on(actionCreator.eventoSocket, (datosSocket) => {
        dispatch(actionCreator.actionCreator(datosSocket));
      });
    });
  }
  return next(action);
};

export default webSocketMiddleware;
