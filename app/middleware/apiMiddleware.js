export const LLAMAR_API = "LLAMAR_API";

const validarPropiedadesApi = (propiedadesApi) => {
  if (!propiedadesApi.types || propiedadesApi.types.length !== 3) {
    throw new Error("Types debe contener 3 elementos");
  }
  if (!propiedadesApi.endpoint) {
    throw new Error("Se debe enviar un endpoint para consumir la api");
  }
  if (!propiedadesApi.nombrePayloadFetch) {
    throw new Error("Se debe especificar un nombre para el payload de los resultados de fetch");
  }
};

const apiMiddleware = (urlApi) => {
  if (!urlApi) {
    throw new Error("Se debe especificar una url para consumir la api");
  }
  return () => (next) => (action) => {
    if (!action || !action[LLAMAR_API]) {
      return next(action);
    }
    const propiedadesApi = action[LLAMAR_API];
    validarPropiedadesApi(propiedadesApi);

    const { types, endpoint, nombrePayloadFetch } = propiedadesApi;
    const [INICIO_LLAMADA_API, LLAMADA_API_FINALIZADA, ERROR_LLAMADA_API] = types;

    next({ type: INICIO_LLAMADA_API });
    return fetch(`${urlApi}${endpoint}`)
      .then(response => response.json())
      .then(response => next({ type: LLAMADA_API_FINALIZADA, [nombrePayloadFetch]: response }))
      .catch(error => next({ type: ERROR_LLAMADA_API, error }));
  };
};
export default apiMiddleware;
