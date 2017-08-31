import { shallow } from "enzyme";
import React from "react";
import MenuNavegacion from "../../app/components/MenuNavegacion";

const crearMenuNavegacion = () => shallow(<MenuNavegacion />);

describe("Componente del Menu de Navegacion", () => {
  it("Debe renderizar componente", () => {
    const menuEnzyme = crearMenuNavegacion();
    expect(menuEnzyme.find("div").first().hasClass("menuNavegacion"))
      .toBe(true);
  });
  it("Menu debe contener 4 opciones", () => {
    const menuEnzyme = crearMenuNavegacion();
    expect(menuEnzyme.find("li").length)
      .toBe(4);
  });
  it("Ninguno de las opciones del menu debe estar seleccionada", () => {
    const menuEnzyme = crearMenuNavegacion();
    expect(menuEnzyme.find(".linkActivo").length)
      .toBe(0);
  });
});
