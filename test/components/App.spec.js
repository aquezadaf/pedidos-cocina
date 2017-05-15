import { shallow } from "enzyme";
import React from "react";
import App from "../../app/components/App";

const crearApp = () => shallow((
  <App>
    <div>Children App</div>
  </App>
));

describe("Componente de la App", () => {
  it("Debe renderizar componente", () => {
    const appEnzyme = crearApp();
    expect(appEnzyme.find("div").first().hasClass("app"))
      .toBe(true);
  });
  it("Debe contener menu de navegacion", () => {
    const appEnzyme = crearApp();
    expect(appEnzyme.find("MenuNavegacion").exists())
      .toBe(true);
  });
  it("Debe contener children", () => {
    const appEnzyme = crearApp();
    expect(appEnzyme.find("div").last().text())
      .toBe("Children App");
  });
});
