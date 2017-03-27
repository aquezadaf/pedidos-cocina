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
    const indice = 1;
    const accionGenerada = {
      type: accionesPanel.ELIMINAR_PEDIDO,
      indice
    };
    expect(accionesPanel.eliminarPedido(indice))
      .toEqual(accionGenerada);
  });
});
