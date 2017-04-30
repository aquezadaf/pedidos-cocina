import * as accionesPanel from "../../app/actions/panel";

describe("Acciones panel", () => {
  it("Agregar pedido debe generar accion agregar pedido", () => {
    const pedido = { id: 1 };
    const accionGenerada = {
      type: accionesPanel.AGREGAR_PEDIDO,
      pedido
    };
    expect(accionesPanel.agregarPedido(pedido))
      .toEqual(accionGenerada);
  });
  it("Eliminar pedido debe generar accion eliminar pedido", () => {
    const id = 1;
    const accionGenerada = {
      type: accionesPanel.ELIMINAR_PEDIDO,
      id
    };
    expect(accionesPanel.eliminarPedido(id))
      .toEqual(accionGenerada);
  });
  it("Aumenter prioridad pedido debe generar accion aumeter prioridad pedido", () => {
    const id = 1;
    const accionGenerada = {
      type: accionesPanel.AUMENTAR_PRIORIDAD_PEDIDO,
      id
    };
    expect(accionesPanel.aumentarPrioridadPedido(id))
      .toEqual(accionGenerada);
  });
  it("Subscribir cambios panel debe contener meta de subscripcion", () => {
    const accionGenerada = accionesPanel.subscribirCambiosPanel();
    expect(accionGenerada.meta)
      .toEqual({ subscribirWebSocket: true });
  });
  it("Subscribir cambios panel debe contener los eventos del socket", () => {
    const accionGenerada = accionesPanel.subscribirCambiosPanel();
    expect(accionGenerada.socketActions.length)
      .toEqual(3);
  });
});
