import { shallow } from "enzyme";
import React from "react";
import TableroPedidos from "../../app/components/TableroPedidos";

const crearTableroPedidos = () => {
  const props = {
    pedidos: [{
      id: 1,
      nombre: "Pedido 1",
      prioridad: 1,
      fechaSolicitud: new Date(2017, 0, 1, 1, 1, 1),
      ordenes: []
    }, {
      id: 2,
      nombre: "Pedido 2",
      prioridad: 2,
      fechaSolicitud: new Date(2017, 0, 1, 1, 1, 2),
      ordenes: []
    }, {
      id: 3,
      nombre: "Pedido 3",
      prioridad: 2,
      fechaSolicitud: new Date(2017, 0, 1, 1, 1, 3),
      ordenes: []
    }],
    subscribirCambiosPedidos: jest.fn()
  };

  const tableroEnzyme = shallow(<TableroPedidos {...props} />);

  return {
    tableroEnzyme,
    props
  };
};

describe("Componente Tablero Pedidos", () => {
  it("Debe renderizar componente", () => {
    const { tableroEnzyme } = crearTableroPedidos();
    expect(tableroEnzyme.find("div").hasClass("tablero"))
      .toBe(true);
  });
  it("La cantidad de elementos en la lista debe ser igual a los pedidos ", () => {
    const { tableroEnzyme, props } = crearTableroPedidos();
    expect(tableroEnzyme.find("Pedido").length)
      .toBe(props.pedidos.length);
  });
  it("Debe subscribirse a cambios al construir el tablero", () => {
    const { props } = crearTableroPedidos();
    expect(props.subscribirCambiosPedidos.mock.calls.length)
      .toBe(1);
  });
  it("Los pedidos se deben ordenar los pedidos por prioridad descendente y fecha solicitud ascendente", () => {
    const { tableroEnzyme, props } = crearTableroPedidos();
    const pedidos = tableroEnzyme.find("Pedido");
    const keyPrimerPedido = Number(pedidos.at(0).key());
    const keySegundoPedido = Number(pedidos.at(1).key());
    const keyTercerPedido = Number(pedidos.at(2).key());
    expect(keyPrimerPedido)
      .toBe(props.pedidos[1].id);
    expect(keySegundoPedido)
      .toBe(props.pedidos[2].id);
    expect(keyTercerPedido)
      .toBe(props.pedidos[0].id);
  });
  it("Debe determinar cual de los pedidos tiene mayor prioridad", () => {
    const { props } = crearTableroPedidos();
    const pedidoPrioridadInferior = props.pedidos[0];
    const pedidoPrioridadSuperior = props.pedidos[1];
    const diferenciaPrioridad =
      TableroPedidos.determinarOrdenPedidos(pedidoPrioridadInferior, pedidoPrioridadSuperior);
    expect(diferenciaPrioridad)
      .toBeGreaterThanOrEqual(0);
  });
  it("Debe determinar cual de los pedidos tiene menor prioridad", () => {
    const { props } = crearTableroPedidos();
    const pedidoPrioridadInferior = props.pedidos[0];
    const pedidoPrioridadSuperior = props.pedidos[1];
    const diferenciaPrioridad =
      TableroPedidos.determinarOrdenPedidos(pedidoPrioridadSuperior, pedidoPrioridadInferior);
    expect(diferenciaPrioridad)
      .toBeLessThan(0);
  });
  it("Para pedidos con igual prioridad debe determinar cual de los pedidos tiene una fecha solicitud mas antigua", () => {
    const { props } = crearTableroPedidos();
    const pedidoPrioridadInferior = props.pedidos[1];
    const pedidoPrioridadSuperior = props.pedidos[2];
    const diferenciaPrioridad =
      TableroPedidos.determinarOrdenPedidos(pedidoPrioridadSuperior, pedidoPrioridadInferior);
    expect(diferenciaPrioridad)
      .toBeGreaterThanOrEqual(0);
  });
  it("Para pedidos con igual prioridad debe determinar cual de los pedidos tiene una fecha solicitud mas reciente", () => {
    const { props } = crearTableroPedidos();
    const pedidoPrioridadInferior = props.pedidos[1];
    const pedidoPrioridadSuperior = props.pedidos[2];
    const diferenciaPrioridad =
      TableroPedidos.determinarOrdenPedidos(pedidoPrioridadInferior, pedidoPrioridadSuperior);
    expect(diferenciaPrioridad)
      .toBeLessThan(0);
  });
});
