export const LLAMAR_API = "LLAMAR_API";

const validarPropiedadesAction = (propiedadesAction) => {
  if (!propiedadesAction.types || propiedadesAction.types.length !== 3) {
    throw new Error("Types debe contener 3 elementos");
  }
  if (!propiedadesAction.endpoint) {
    throw new Error("Se debe enviar un endpoint para consumir la api");
  }
};

const apiMiddleware = urlApi => ({ dispatch }) => next => action => {
  if (!action || !action[LLAMAR_API]) {
    return next(action);
  }
  validarPropiedadesAction(action[LLAMAR_API]);
};

export default apiMiddleware;
