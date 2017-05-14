import { shallow } from "enzyme";
import React from "react";
import TableroPedidos from "../../app/components/TableroPedidos";

function crearTableroPedidos() {
  const props = {
    pedidos: [{
      id: 1,
      nombre: "Pedido 1",
      prioridad: 1,
      fechaSolicitud: new Date(2017, 0, 1),
      ordenes: []
    }, {
      id: 2,
      nombre: "Pedido 2",
      prioridad: 2,
      fechaSolicitud: new Date(2017, 0, 1),
      ordenes: []
    }],
    subscribirCambiosPedidos: jest.fn()
  };

  const tableroEnzyme = shallow(<TableroPedidos {...props} />);

  return {
    tableroEnzyme,
    props
  };
}

describe("Componente Tablero Pedidos", () => {
  it("Debe renderizar componente", () => {
    const { tableroEnzyme } = crearTableroPedidos();
    expect(tableroEnzyme.find("h1").text())
      .toBe("Tablero pedidos");
  });
  it("La cantidad de elementos en la liste debe ser igual a los pedidos ", () => {
    const { tableroEnzyme, props } = crearTableroPedidos();
    expect(tableroEnzyme.find("Pedido").length)
      .toBe(props.pedidos.length);
  });
  it("Debe subscribirse a cambios al construir el tablero", () => {
    const { props } = crearTableroPedidos();
    expect(props.subscribirCambiosPedidos.mock.calls.length)
      .toBe(1);
  });
  it("Los pedidos se deben ordenar segun prioridad de manera descendente", () => {
    const { tableroEnzyme, props } = crearTableroPedidos();
    const pedidos = tableroEnzyme.find("Pedido");
    const keyPrimerPedido = Number(pedidos.at(0).key());
    const keySegundoPedido = Number(pedidos.at(1).key());
    expect(keyPrimerPedido)
      .toBe(props.pedidos[1].id);
    expect(keySegundoPedido)
      .toBe(props.pedidos[0].id);
  });
  it("Debe determinar cual de los pedidos tiene mayor prioridad", () => {
    const { props } = crearTableroPedidos();
    const pedidoPrioridadInferior = props.pedidos[0];
    const pedidoPrioridadSuperior = props.pedidos[1];
    expect(TableroPedidos.compararPrioridadPedidos(pedidoPrioridadInferior, pedidoPrioridadSuperior))
      .toBeGreaterThanOrEqual(0);
  });
  it("Debe determinar cual de los pedidos tiene menor prioridad", () => {
    const { props } = crearTableroPedidos();
    const pedidoPrioridadInferior = props.pedidos[0];
    const pedidoPrioridadSuperior = props.pedidos[1];
    expect(TableroPedidos.compararPrioridadPedidos(pedidoPrioridadSuperior, pedidoPrioridadInferior))
      .toBeLessThan(0);
  });
});
