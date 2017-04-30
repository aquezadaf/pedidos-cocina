import webSocketMiddleware from "../../app/middleware/webSocketMiddleware";

function mockSocket() {
  const eventos = {};
  return {
    on: jest.fn((evento, cb) => {
      eventos[evento] = cb;
    }),
    trigger: (evento) => { eventos[evento](); }
  };
}

function generarActionValida() {
  return {
    meta: { subscribirWebSocket: true },
    socketActions: [{ eventoSocket: "eventoPrueba", actionCreator: () => { } }]
  };
}

function ejecutarAction(action) {
  const socket = mockSocket();
  const middleware = webSocketMiddleware(socket);
  const dispatch = { dispatch: jest.fn() };
  const next = jest.fn();
  middleware(dispatch)(next)(action);
  return {
    llamadasSocketOn: socket.on.mock.calls,
    llamadasDispatch: dispatch.dispatch.mock.calls,
    llamadasNext: next.mock.calls,
    triggerSocket: socket.trigger
  };
}

describe("Web Socket Middleware", () => {
  it("No debe llamar a socket si action no tiene meta subscribirWebSocket", () => {
    const action = {};
    const { llamadasSocketOn } = ejecutarAction(action);
    expect(llamadasSocketOn.length)
      .toEqual(0);
  });
  it("No debe asociar evento a socket si action tiene meta subscribirWebSocket y no contiene acciones", () => {
    const action = { meta: { subscribirWebSocket: true }, socketActions: [] };
    const { llamadasSocketOn } = ejecutarAction(action);
    expect(llamadasSocketOn.length)
      .toEqual(0);
  });
  it("Debe asociar evento a socket si action tiene meta subscribirWebSocket y acciones", () => {
    const action = generarActionValida();
    const { llamadasSocketOn } = ejecutarAction(action);
    const eventoAsociado = llamadasSocketOn[0][0];
    expect(llamadasSocketOn.length)
      .toEqual(1);
    expect(eventoAsociado)
      .toEqual("eventoPrueba");
  });
  it("Debe ejecutar Next independiente de los parametros de entrada", () => {
    const { llamadasNext } = ejecutarAction({});
    expect(llamadasNext.length)
      .toEqual(1);
  });
  it("Debe ejecutar dispatch al ejecutar evento de socket", () => {
    const action = generarActionValida();
    const { llamadasDispatch, triggerSocket } = ejecutarAction(action);
    triggerSocket("eventoPrueba");
    expect(llamadasDispatch.length)
      .toEqual(1);
  });
});
