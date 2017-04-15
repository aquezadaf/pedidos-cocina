import { shallow } from "enzyme";
import React from "react";
import Panel from "../../app/components/Panel";

function setup() {
  const props = {
    pedidos: [{
      id: 1,
      nombre: "Pedido 1"
    }, {
      id: 2,
      nombre: "Pedido 2"
    }],
    subscribirCambiosPanel: () => { }
  };

  const panelEnzyme = shallow(<Panel {...props} />);

  return {
    panelEnzyme
  };
}

describe("Componenete Panel", () => {
  it("Debe renderizar componente", () => {
    const { panelEnzyme } = setup();
    expect(panelEnzyme.find("h1").text())
      .toBe("Panel pedidos");
    expect(panelEnzyme.find("li").length)
      .toBe(2);
  });
});
