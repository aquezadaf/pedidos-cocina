import { shallow } from "enzyme";
import React from "react";
import Panel from "../../app/components/Panel";

function crearPanel() {
  const props = {
    pedidos: [{
      id: 1,
      nombre: "Pedido 1",
      prioridad: 1
    }, {
      id: 2,
      nombre: "Pedido 2",
      prioridad: 2
    }],
    subscribirCambiosPanel: jest.fn()
  };

  const panelEnzyme = shallow(<Panel {...props} />);

  return {
    panelEnzyme,
    props
  };
}

describe("Componenete Panel", () => {
  it("Debe renderizar componente", () => {
    const { panelEnzyme } = crearPanel();
    expect(panelEnzyme.find("h1").text())
      .toBe("Panel pedidos");
  });
  it("La cantidad de elementos en la liste debe ser igual a los pedidos ", () => {
    const { panelEnzyme } = crearPanel();
    expect(panelEnzyme.find("Pedido").length)
      .toBe(2);
  });
  it("Los pedidos se deben ordenar segun prioridad de manera descendente", () => {
    const { panelEnzyme, props } = crearPanel();
    const pedidos = panelEnzyme.find("Pedido");
    const keyPrimerPedido = Number(pedidos.at(0).key());
    const keySegundoPedido = Number(pedidos.at(1).key());
    expect(keyPrimerPedido)
      .toBe(props.pedidos[1].id);
    expect(keySegundoPedido)
      .toBe(props.pedidos[0].id);
  });
  it("Debe determinar cual de los pedidos tiene mayor prioridad", () => {
    const { props } = crearPanel();
    const pedidoPrioridadInferior = props.pedidos[0];
    const pedidoPrioridadSuperior = props.pedidos[1];
    expect(Panel.compararPrioridadPedidos(pedidoPrioridadInferior, pedidoPrioridadSuperior))
      .toBeGreaterThanOrEqual(0);
  });
  it("Debe determinar cual de los pedidos tiene menor prioridad", () => {
    const { props } = crearPanel();
    const pedidoPrioridadInferior = props.pedidos[0];
    const pedidoPrioridadSuperior = props.pedidos[1];
    expect(Panel.compararPrioridadPedidos(pedidoPrioridadSuperior, pedidoPrioridadInferior))
      .toBeLessThan(0);
  });
});
