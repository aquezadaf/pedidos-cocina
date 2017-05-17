import { shallow } from "enzyme";
import React from "react";
import PantallaCargando from "../../app/components/PantallaCargando";

const crearPantallaCargando = (estaCargando) => {
  const props = {
    estaCargando,
    children: <div>Componente hijo</div>
  };

  return shallow(<PantallaCargando {...props} />);
};

describe("Componente Pantalla Cargando", () => {
  it("Debe mostrar children si no esta cargando", () => {
    const pantallaEnzyme = crearPantallaCargando(false);
    expect(pantallaEnzyme.find("div").text())
      .toBe("Componente hijo");
  });
  it("Debe mostrar mostrar texto cargando si esta cargando", () => {
    const pantallaEnzyme = crearPantallaCargando(true);
    expect(pantallaEnzyme.find(".texto").text())
      .toBe("Cargando...");
  });
});
