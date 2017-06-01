// @flow
import { mount } from "enzyme";
import React from "react";
import MenuRestaurante from "../../app/components/MenuRestaurante";

const crearMenuRestaurante = () => {
  const props = {
    platosMenu: [
      { id: 1, nombre: "Primer plato", descripcion: "Plato", urlFotoPlato: "", tiempoAproximadoPreparacion: 10, habilitado: true },
      { id: 2, nombre: "Segundo plato", descripcion: "Plato", urlFotoPlato: "", tiempoAproximadoPreparacion: 10, habilitado: true },
      { id: 3, nombre: "Tercer plato", descripcion: "Plato", urlFotoPlato: "", tiempoAproximadoPreparacion: 10, habilitado: false }
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
    expect(menuEnzyme.find("div").first().hasClass("menu"))
      .toBe(true);
  });
  it("Debe mostrar todos los platos del menu", () => {
    const { menuEnzyme, props } = crearMenuRestaurante();
    const platosEnComponente = menuEnzyme.find("PlatoMenu").length;
    expect(platosEnComponente)
      .toBe(props.platosMenu.length);
  });
  it("Debe solicitar el menu del restuarante al montar el componente", () => {
    const { props } = crearMenuRestaurante();
    expect(props.solicitarMenuRestaurante.mock.calls.length)
      .toBe(1);
  });
});
