import webSocketMiddleware, { SUBSCRIBIR_WEBSOCKET } from "../../app/middleware/webSocketMiddleware";

const mockSocket = () => {
  const eventos = [];
  return {
    on: jest.fn((evento, cb) => {
      eventos.push({ evento, cb });
    }),
    trigger: (evento) => {
      eventos
        .filter((ev) => ev.evento === evento)
        .forEach((ev) => ev.cb());
    }
  };
};

const generarActionValida = () => ({
  [SUBSCRIBIR_WEBSOCKET]: {
    socketActions: [{ eventoSocket: "eventoPrueba", actionCreator: () => ({ type: "ACCION_PRUEBA" }) }]
  }
});

const generarMiddleware = () => {
  const socket = mockSocket();
  const socketMiddleware = webSocketMiddleware(socket);
  const next = jest.fn();
  const middleware = socketMiddleware()(next);
  return {
    middleware,
    llamadasSocketOn: socket.on.mock.calls,
    llamadasNext: next.mock.calls,
    triggerSocket: socket.trigger
  };
};

const ejecutarAction = (action) => {
  const { middleware, llamadasSocketOn, llamadasNext, triggerSocket } = generarMiddleware();
  middleware(action);
  return {
    llamadasSocketOn,
    llamadasNext,
    triggerSocket
  };
};

describe("Web Socket Middleware", () => {
  it("Si action no tiene propiedad subscripcion debe ejecutar next con el action recibido", () => {
    const action = { test: true };
    const { llamadasNext } = ejecutarAction(action);
    const parametroNext = llamadasNext[0][0];
    expect(parametroNext)
      .toEqual(action);
  });
  it("Debe arrojar error si no se envia socketActions", () => {
    const action = { [SUBSCRIBIR_WEBSOCKET]: {} };
    expect(() => {
      ejecutarAction(action);
    }).toThrow("No se encontro propiedad socketActions");
  });
  it("Debe arrojar error si no se envia arreglo en socketActions", () => {
    const action = { [SUBSCRIBIR_WEBSOCKET]: { socketActions: "array" } };
    expect(() => {
      ejecutarAction(action);
    }).toThrow("La propiedad socketActions debe ser un arreglo");
  });
  it("No debe asociar evento a socket si no contiene acciones", () => {
    const action = { [SUBSCRIBIR_WEBSOCKET]: { socketActions: [] } };
    const { llamadasSocketOn } = ejecutarAction(action);
    expect(llamadasSocketOn.length)
      .toEqual(0);
  });
  it("Debe asociar evento a socket si contiene acciones", () => {
    const action = generarActionValida();
    const { llamadasSocketOn } = ejecutarAction(action);
    const eventoAsociado = llamadasSocketOn[0][0];
    expect(llamadasSocketOn.length)
      .toEqual(1);
    expect(eventoAsociado)
      .toEqual("eventoPrueba");
  });
  it("Debe ejecutar next con el resultado de action creator al ejecutar evento de socket", () => {
    const action = generarActionValida();
    const { llamadasNext, triggerSocket } = ejecutarAction(action);
    triggerSocket("eventoPrueba");
    const parametroNext = llamadasNext[0][0];
    const resultadoActionCreator = action[SUBSCRIBIR_WEBSOCKET].socketActions[0].actionCreator();
    expect(llamadasNext.length)
      .toEqual(1);
    expect(parametroNext)
      .toEqual(resultadoActionCreator);
  });
  it("No debe permitir subscribirse al mismo mas de una vez", () => {
    const action = generarActionValida();
    const { middleware, triggerSocket, llamadasNext } = generarMiddleware();
    middleware(action);
    middleware(action);
    middleware(action);
    triggerSocket("eventoPrueba");
    expect(llamadasNext.length)
      .toEqual(1);
  });
});
