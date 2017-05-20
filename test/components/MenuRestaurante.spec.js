import { mount } from "enzyme";
import React from "react";
import MenuRestaurante from "../../app/components/MenuRestaurante";

const crearMenuRestaurante = () => {
  const props = {
    platosMenu: [
      "Primer plato",
      "Segundo plato",
      "Tercer plato"
    ],
    solicitarMenuRestaurante: jest.fn()
  };

  const menuEnzyme = mount(<MenuRestaurante {...props} />);

  return {
    menuEnzyme,
    props
  };
};

describe("Componente Menu Restaurante", () => {
  it("Debe renderizar componente", () => {
    const { menuEnzyme } = crearMenuRestaurante();
    expect(menuEnzyme.find("div > ul").exists())
      .toBe(true);
  });
  it("Debe mostrar todos los platos del menu", () => {
    const { menuEnzyme, props } = crearMenuRestaurante();
    const platosEnComponente = menuEnzyme.find("div > ul > li").length;
    expect(platosEnComponente)
      .toBe(props.platosMenu.length);
  });
  it("Debe solicitar el menu del restuarante al montar el componente", () => {
    const { props } = crearMenuRestaurante();
    expect(props.solicitarMenuRestaurante.mock.calls.length)
      .toBe(1);
  });
});
