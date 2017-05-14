import * as accionesTablero from "../../app/actions/tableroPedidos";

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
});
