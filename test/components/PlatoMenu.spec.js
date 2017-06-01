// @flow
import { mount } from "enzyme";
import React from "react";
import PlatoMenu from "../../app/components/PlatoMenu";

const crearPlatoMenu = (habilitado: boolean = true) => {
  const props = {
    nombre: "Primer plato",
    descripcion: "Plato",
    urlFotoPlato: "",
    tiempoAproximadoPreparacion: 10,
    habilitado
  };

  const platoEnzyme = mount(<PlatoMenu {...props} />);

  return platoEnzyme;
};

describe("Componente Plato Menu", () => {
  it("Debe renderizar componente", () => {
    const platoEnzyme = crearPlatoMenu();
    expect(platoEnzyme.find("h4").exists())
      .toBe(true);
  });
  it("Debe mostrar el boton deshabilitar cuando plato esta habilitado", () => {
    const platoEnzyme = crearPlatoMenu(true);
    const botonPlato = platoEnzyme.find("button");
    expect(botonPlato.text())
      .toEqual("Deshabilitar");
    expect(botonPlato.hasClass("botonDeshabilitar"))
      .toBe(true);
  });
  it("Debe mostrar el boton habilitar cuando plato esta deshabilitado", () => {
    const platoEnzyme = crearPlatoMenu(false);
    const botonPlato = platoEnzyme.find("button");
    expect(botonPlato.text())
      .toEqual("Habilitar");
    expect(botonPlato.hasClass("botonHabilitar"))
      .toBe(true);
  });
});
