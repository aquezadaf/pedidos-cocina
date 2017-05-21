import apiMiddleware, { LLAMAR_API } from "../../app/middleware/apiMiddleware";

const ejecutarAction = (action) => {
  const urlApi = "http://localhost/";
  const middleware = apiMiddleware(urlApi);
  const next = jest.fn();
  const getState = jest.fn();
  const promesaMiddleware = middleware({ getState })(next)(action);
  return {
    llamadasNext: next.mock.calls,
    promesaMiddleware
  };
};

const accionApiValida = {
  [LLAMAR_API]: {
    types: ["PRIMERO", "SEGUNDO", "TERCERO"],
    endpoint: "pedidos",
    nombrePayloadFetch: "pedidos"
  }
};

const mockFetchAccionApiValida = () => {
  const respuestaFetch = [
    { id: 1, nombre: "Primer pedido" },
    { id: 2, nombre: "Segundo pedido" }
  ];
  const respuestaMock = fetch.mockResponseOnce(JSON.stringify(respuestaFetch));
  return {
    respuestaFetch,
    respuestaMock
  };
};

describe("Api Middleware", () => {
  it("Debe arrojar error si no se pasa una url al momento de generar el middleware", () => {
    expect(() => {
      apiMiddleware();
    }).toThrow(/url/);
  });
  it("Si no contiene propiedad con el nombre LLAMAR_API debe ejecutar next con el action recibido", () => {
    const actionSinLlamadaApi = { type: "LLAMAR_API", otraPropiedad: "Valor propiedad" };
    const { llamadasNext } = ejecutarAction(actionSinLlamadaApi);
    expect(llamadasNext.length)
      .toBe(1);
    expect(llamadasNext[0][0])
      .toBe(actionSinLlamadaApi);
  });
  it("Debe arrojar error si types no contiene tres elementos", () => {
    expect(() => {
      ejecutarAction({ [LLAMAR_API]: { types: ["PRIMERO", "SEGUNDO"], endpoint: "pedidos" } });
    }).toThrow(/Types/);
  });
  it("Debe arrojar error si no contiene endpoint de la api", () => {
    expect(() => {
      ejecutarAction({ [LLAMAR_API]: { types: ["PRIMERO", "SEGUNDO", "TERCERO"] } });
    }).toThrow(/endpoint/);
  });
  it("Debe arrojar error si no contiene el nombre del payload de retorno de la api", () => {
    expect(() => {
      ejecutarAction({ [LLAMAR_API]: { types: ["PRIMERO", "SEGUNDO", "TERCERO"], endpoint: "pedidos" } });
    }).toThrow(/payload/);
  });
  it("Antes de realizar consulta a la api, debe ejecutar next del primer tipo en types", () => {
    const { llamadasNext } = ejecutarAction(accionApiValida);
    const parametroNext = llamadasNext[0][0];
    expect(parametroNext)
      .toEqual({ type: accionApiValida[LLAMAR_API].types[0] });
  });
  it("Despues de finalizar satisfactoriamente la consulta a la api, debe ejecutar next del segunto tipo en types", () => {
    const { respuestaFetch } = mockFetchAccionApiValida();
    const { llamadasNext, promesaMiddleware } = ejecutarAction(accionApiValida);
    return promesaMiddleware
      .then(() => {
        const parametroNext = llamadasNext[1][0];
        return expect(parametroNext)
          .toEqual({ type: accionApiValida[LLAMAR_API].types[1], pedidos: respuestaFetch });
      });
  });
  it("Si la consulta a la api finaliza con errrores, debe ejecutar next del tercer tipo en types", () => {
    const { llamadasNext, promesaMiddleware } = ejecutarAction(accionApiValida);
    return promesaMiddleware
      .then(() => {
        const parametroNext = llamadasNext[1][0];
        expect(parametroNext.type)
          .toEqual(accionApiValida[LLAMAR_API].types[2]);
        return expect(parametroNext.error)
          .toBeTruthy();
      });
  });
  it("La url que se consulta en fetch debe ser el endpoint concatenado con la url de configuracion del middleware", () => {
    const { respuestaMock } = mockFetchAccionApiValida();
    const { promesaMiddleware } = ejecutarAction(accionApiValida);
    return promesaMiddleware
      .then(() => expect(respuestaMock)
        .toHaveBeenCalledWith("http://localhost/pedidos"));
  });
  it("Si el resultado de la funcion llamarApi es verdadero se debe llamar a la api", () => {
    const { respuestaMock } = mockFetchAccionApiValida();
    const accionConLlamarApi = { ...accionApiValida };
    accionConLlamarApi[LLAMAR_API].llamarApi = () => true;
    const { promesaMiddleware } = ejecutarAction(accionConLlamarApi);
    return promesaMiddleware
      .then(() => expect(respuestaMock)
        .toHaveBeenCalledWith("http://localhost/pedidos"));
  });
  it("Si el resultado de la funcion llamarApi es falso no se debe llamar a la api", () => {
    const accionConLlamarApi = { ...accionApiValida };
    accionConLlamarApi[LLAMAR_API].llamarApi = () => false;
    const { llamadasNext } = ejecutarAction(accionConLlamarApi);
    expect(llamadasNext.length)
      .toBe(0);
  });
});
