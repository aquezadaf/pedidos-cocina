import * as accionesTablero from "../../app/actions/tableroPedidos";
import { LLAMAR_API } from "../../app/middleware/apiMiddleware";

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
  it("Subscribir cambios pedidos debe contener meta de subscripcion", () => {
    const accionGenerada = accionesTablero.subscribirCambiosPedidos();
    expect(accionGenerada.meta)
      .toEqual({ subscribirWebSocket: true });
  });
  it("Subscribir cambios pedidos debe contener los eventos del socket", () => {
    const accionGenerada = accionesTablero.subscribirCambiosPedidos();
    expect(accionGenerada.socketActions.length)
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
});
