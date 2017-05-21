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

const debeRealizarSolicitud = (llamarApi, getState) => {
  if (!llamarApi) {
    return true;
  }
  return llamarApi(getState());
};

const generarFuncionProcesarResultados = (procesarResultados) => {
  if (procesarResultados) {
    return procesarResultados;
  }
  return (resultado) => resultado;
};

const validarRespuestaServidor = (response) => response
  .json()
  .then((json) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  });

const apiMiddleware = (urlApi) => {
  if (!urlApi) {
    throw new Error("Se debe especificar una url para consumir la api");
  }
  return ({ getState }) => (next) => (action) => {
    if (!action || !action[LLAMAR_API]) {
      return next(action);
    }

    const propiedadesApi = action[LLAMAR_API];
    validarPropiedadesApi(propiedadesApi);

    if (!debeRealizarSolicitud(propiedadesApi.llamarApi, getState)) {
      return;
    }

    const { types, endpoint, nombrePayloadFetch, procesarResultados } = propiedadesApi;
    const [INICIO_LLAMADA_API, LLAMADA_API_FINALIZADA, ERROR_LLAMADA_API] = types;
    const funcionProcesarResultados = generarFuncionProcesarResultados(procesarResultados);

    next({ type: INICIO_LLAMADA_API });
    return fetch(`${urlApi}${endpoint}`)
      .then(validarRespuestaServidor)
      .then(funcionProcesarResultados)
      .then(
      response => next({ type: LLAMADA_API_FINALIZADA, [nombrePayloadFetch]: response }),
      error => next({ type: ERROR_LLAMADA_API, error })
      );
  };
};

export default apiMiddleware;
