import apiMiddleware, { LLAMAR_API } from "../../app/middleware/apiMiddleware";

const ejecutarAction = (action) => {
  const urlApi = "";
  const middleware = apiMiddleware(urlApi);
  const dispatch = { dispatch: jest.fn() };
  const next = jest.fn();
  middleware(dispatch)(next)(action);
  return {
    llamadasDispatch: dispatch.dispatch.mock.calls,
    llamadasNext: next.mock.calls
  };
};

describe("Api Middleware", () => {
  it("Si no contiene propiedad con el nombre LLAMAR_API debe ejecutar next", () => {
    const { llamadasNext } = ejecutarAction({ type: "LLAMAR_API", otraPropiedad: "Valor propiedad" });
    expect(llamadasNext.length)
      .toBe(1);
  });
  it("Debe arrojar error si types no contiene tres elementos", () => {
    expect(() => {
      ejecutarAction({ [LLAMAR_API]: { types: [1, 2], endpoint: "" } });
    }).toThrow(/Types/);
  });
  it("Debe arrojar error si no contiene endpoint de la api", () => {
    expect(() => {
      ejecutarAction({ [LLAMAR_API]: { types: [1, 2, 3] } });
    }).toThrow(/endpoint/);
  });
});
