// @flow
import { mount } from "enzyme";
import React from "react";
import PlatoMenu from "../../app/components/PlatoMenu";

const crearPlatoMenu = (habilitado: boolean = true) => {
  const props = {
    id: 1,
    nombre: "Primer plato",
    descripcion: "Plato",
    urlFotoPlato: "",
    tiempoAproximadoPreparacion: 10,
    habilitado,
    habilitarPlatoMenu: jest.fn(),
    deshabilitarPlatoMenu: jest.fn()
  };

  const platoEnzyme = mount(<PlatoMenu {...props} />);

  return { platoEnzyme, props };
};

describe("Componente Plato Menu", () => {
  it("Debe renderizar componente", () => {
    const { platoEnzyme } = crearPlatoMenu();
    expect(platoEnzyme.find("h4").exists())
      .toBe(true);
  });
  it("Debe mostrar el boton deshabilitar cuando plato esta habilitado", () => {
    const { platoEnzyme } = crearPlatoMenu(true);
    const botonPlato = platoEnzyme.find("button");
    expect(botonPlato.text())
      .toEqual("Deshabilitar");
    expect(botonPlato.hasClass("botonDeshabilitar"))
      .toBe(true);
  });
  it("Debe mostrar el boton habilitar cuando plato esta deshabilitado", () => {
    const { platoEnzyme } = crearPlatoMenu(false);
    const botonPlato = platoEnzyme.find("button");
    expect(botonPlato.text())
      .toEqual("Habilitar");
    expect(botonPlato.hasClass("botonHabilitar"))
      .toBe(true);
  });
  it("Debe ejecutar deshabilitarPlatoMenu con el id del plato al presionar el boton cuando el plato esta habilitado", () => {
    const { platoEnzyme, props } = crearPlatoMenu(true);
    platoEnzyme.find("button").simulate("click");
    const cantidadEjecuciones = props.deshabilitarPlatoMenu.mock.calls.length;
    const parametroFuncion = props.deshabilitarPlatoMenu.mock.calls[0][0];
    expect(cantidadEjecuciones)
      .toEqual(1);
    expect(parametroFuncion)
      .toEqual(1);
  });
  it("Debe ejecutar habilitarPlatoMenu con el id del plato al presionar el boton cuando el plato esta deshabilitado", () => {
    const { platoEnzyme, props } = crearPlatoMenu(false);
    platoEnzyme.find("button").simulate("click");
    const cantidadEjecuciones = props.habilitarPlatoMenu.mock.calls.length;
    const parametroFuncion = props.habilitarPlatoMenu.mock.calls[0][0];
    expect(cantidadEjecuciones)
      .toEqual(1);
    expect(parametroFuncion)
      .toEqual(1);
  });
});
