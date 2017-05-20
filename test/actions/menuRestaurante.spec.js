import * as accionesMenu from "../../app/actions/menuRestaurante";

describe("Acciones Menu Restaurante", () => {
  it("Solicitar menu restaurante debe generar funcion", () => {
    const funcionGenerada = accionesMenu.solicitarMenuRestaurante();
    expect(typeof funcionGenerada)
      .toBe("function");
  });
  it("Cargar menu debe generar accion cargar menu", () => {
    const platosMenu = ["Primer plato", "Segundo plato", "Tercer plato"];
    const accionGenerada = {
      type: accionesMenu.CARGAR_MENU_RESTAURANTE,
      platosMenu
    };
    expect(accionesMenu.cargarMenuRestaurante(platosMenu))
      .toEqual(accionGenerada);
  });
});
