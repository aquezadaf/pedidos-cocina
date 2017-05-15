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
  it("Al hacer click en un menu no seleccionado se debe seleccionar", () => {
    const menuEnzyme = crearMenuNavegacion();
    const menuNoSeleccionado = menuEnzyme.find("Link").first();
    const textoMenuNoSeleccionado = menuNoSeleccionado.find("div").text();
    menuNoSeleccionado.simulate("click");
    const textoMenuSeleccionado = menuEnzyme.find(".elementoListaSeleccionado").find(".textoLink").text();
    expect(textoMenuSeleccionado)
      .toEqual(textoMenuNoSeleccionado);
  });
  it("Al hacer click en un menu seleccionado se debe mantener seleccionado el mismo menu", () => {
    const menuEnzyme = crearMenuNavegacion();
    const menuSeleccionado = menuEnzyme.find(".elementoListaSeleccionado");
    const textoMenuSeleccionado = menuSeleccionado.text();
    menuSeleccionado.simulate("click");
    const textoNuevoMenuSeleccionado = menuEnzyme.find(".elementoListaSeleccionado").find(".textoLink").text();
    expect(textoNuevoMenuSeleccionado)
      .toEqual(textoMenuSeleccionado);
  });
});
