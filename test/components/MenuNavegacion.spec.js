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
  it("Menu debe contener cinco opciones", () => {
    const menuEnzyme = crearMenuNavegacion();
    expect(menuEnzyme.find("li").length)
      .toBe(5);
  });
  it("Una de las opciones del menu debe estar seleccionada", () => {
    const menuEnzyme = crearMenuNavegacion();
    expect(menuEnzyme.find(".elementoListaSeleccionado").length)
      .toBe(1);
  });
});
