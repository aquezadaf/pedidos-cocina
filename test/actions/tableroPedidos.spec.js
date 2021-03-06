import * as accionesTablero from "../../app/actions/tableroPedidos";
import { LLAMAR_API } from "../../app/middleware/apiMiddleware";
import { SUBSCRIBIR_WEBSOCKET } from "../../app/middleware/webSocketMiddleware";

describe("Acciones Tablero Pedido", () => {
  it("Agregar pedido debe generar accion agregar pedido", () => {
    const pedido = { id: 1 };
    const accionGenerada = {
      type: accionesTablero.AGREGAR_PEDIDO,
      pedido
    };
    expect(accionesTablero.agregarPedido(pedido))
      .toEqual(accionGenerada);
  });
  it("Eliminar pedido debe generar accion eliminar pedido", () => {
    const id = 1;
    const accionGenerada = {
      type: accionesTablero.ELIMINAR_PEDIDO,
      id
    };
    expect(accionesTablero.eliminarPedido(id))
      .toEqual(accionGenerada);
  });
  it("Aumenter prioridad pedido debe generar accion aumentar prioridad pedido", () => {
    const id = 1;
    const accionGenerada = {
      type: accionesTablero.AUMENTAR_PRIORIDAD_PEDIDO,
      id
    };
    expect(accionesTablero.aumentarPrioridadPedido(id))
      .toEqual(accionGenerada);
  });
  it("Subscribir cambios pedidos debe contener propiedad subscripcion web socket", () => {
    const accionGenerada = accionesTablero.subscribirCambiosPedidos();
    expect(accionGenerada)
      .toHaveProperty(SUBSCRIBIR_WEBSOCKET);
  });
  it("Subscribir cambios pedidos debe contener los eventos del socket", () => {
    const accionGenerada = accionesTablero.subscribirCambiosPedidos();
    expect(accionGenerada[SUBSCRIBIR_WEBSOCKET].socketActions.length)
      .toEqual(3);
  });
  it("Solicitar pedidos debe retornar objeto middleware api", () => {
    const objetoMiddleware = accionesTablero.solicitarPedidos()[LLAMAR_API];
    expect(objetoMiddleware)
      .toHaveProperty("types");
    expect(objetoMiddleware)
      .toHaveProperty("endpoint");
    expect(objetoMiddleware)
      .toHaveProperty("nombrePayloadFetch");
    expect(objetoMiddleware)
      .toHaveProperty("llamarApi");
    expect(objetoMiddleware)
      .toHaveProperty("procesarResultados");
  });
  it("Debe llamar api de solicitarPedidos debe retornar falso si esta cargando es verdadero", () => {
    const llamarApi = accionesTablero.solicitarPedidos()[LLAMAR_API].llamarApi;
    const debeLlamarApi = llamarApi({ tableroPedidos: { estaCargando: true } });
    expect(debeLlamarApi)
      .toBe(false);
  });
  it("Debe llamar api de solicitarPedidos debe retornar falso si esta cargando es falso y existen pedidos en el tablero", () => {
    const llamarApi = accionesTablero.solicitarPedidos()[LLAMAR_API].llamarApi;
    const debeLlamarApi = llamarApi({ tableroPedidos: { estaCargando: false, pedidos: ["Pedidos"] } });
    expect(debeLlamarApi)
      .toBe(false);
  });
  it("Debe llamar api de solicitarPedidos debe retornar verdadero si esta cargando es falso y no existen pedidos en el tablero", () => {
    const llamarApi = accionesTablero.solicitarPedidos()[LLAMAR_API].llamarApi;
    const debeLlamarApi = llamarApi({ tableroPedidos: { estaCargando: false, pedidos: [] } });
    expect(debeLlamarApi)
      .toBe(true);
  });
  it("Procesar resultados de solicitarPedidos debe convertir las fechas en string a date", () => {
    const procesarResultados = accionesTablero.solicitarPedidos()[LLAMAR_API].procesarResultados;
    const pedidosString = [{ fechaSolicitud: "01-01-2017" }, { fechaSolicitud: "02-02-2017" }];
    const pedidosDate = procesarResultados(pedidosString);
    pedidosDate.forEach((pedido) => {
      expect(pedido.fechaSolicitud)
        .toBeInstanceOf(Date);
    });
  });
});
