import { shallow } from "enzyme";
import React from "react";
import PantallaCargando, { conectarPantallaCargando } from "../../app/components/PantallaCargando";

const crearPantallaCargando = (estaCargando) => {
  const children = <div>Componente hijo</div>;

  return shallow(
    <PantallaCargando estaCargando={estaCargando}>
      {children}
    </PantallaCargando>
  );
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

describe("Conector Pantalla Cargando", () => {
  const crearComponeneteConectado = (estaCargando) => {
    const componente = () => (<div>Componente a conectar</div>);
    const ComponenteConectado = conectarPantallaCargando(componente)({ estaCargando });
    return shallow(ComponenteConectado);
  };

  it("Debe generar funcion al recibir el componente a conectar", () => {
    const componente = () => { };
    const funcionPropiedades = conectarPantallaCargando(componente);
    expect(typeof funcionPropiedades)
      .toBe("function");
  });
  it("Al ejecutar funcion retornada por el conector, si la pantalla esta cargando retornar el componente conectado", () => {
    const componenteConectado = crearComponeneteConectado(false);
    expect(componenteConectado.text())
      .toEqual("<componente />");
  });
  it("Al ejecutar funcion retornada por el conector, si esta cargando debe retornar texto cargando", () => {
    const componenteConectado = crearComponeneteConectado(true);
    expect(componenteConectado.text())
      .toEqual("Cargando...");
  });
});
