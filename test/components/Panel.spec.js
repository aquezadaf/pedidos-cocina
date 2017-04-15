import { shallow } from "enzyme";
import React from "react";
import Panel from "../../app/components/Panel";

function crearPanel() {
  const props = {
    pedidos: [{
      id: 1,
      nombre: "Pedido 1"
    }, {
      id: 2,
      nombre: "Pedido 2"
    }],
    subscribirCambiosPanel: jest.fn()
  };

  const panelEnzyme = shallow(<Panel {...props} />);

  return panelEnzyme;
}

describe("Componenete Panel", () => {
  it("Debe renderizar componente", () => {
    const panelEnzyme = crearPanel();
    expect(panelEnzyme.find("h1").text())
      .toBe("Panel pedidos");
  });
  it("La cantidad de elementos en la liste debe ser igual a los pedidos ", () => {
    const panelEnzyme = crearPanel();
    expect(panelEnzyme.find("li").length)
      .toBe(2);
  });
});
