import * as accionesMenu from "../../app/actions/menuRestaurante";
import { LLAMAR_API } from "../../app/middleware/apiMiddleware";

describe("Acciones Menu Restaurante", () => {
  it("Solicitar menu restaurante debe retornar objeto middleware api", () => {
    const objetoMiddleware = accionesMenu.solicitarMenuRestaurante()[LLAMAR_API];
    expect(objetoMiddleware)
      .toHaveProperty("types");
    expect(objetoMiddleware)
      .toHaveProperty("endpoint");
    expect(objetoMiddleware)
      .toHaveProperty("nombrePayloadFetch");
    expect(objetoMiddleware)
      .toHaveProperty("llamarApi");
  });
  it("Debe llamar api de solicitarMenuRestaurante debe retornar falso si esta cargando es verdadero", () => {
    const llamarApi = accionesMenu.solicitarMenuRestaurante()[LLAMAR_API].llamarApi;
    const debeLlamarApi = llamarApi({ menuRestaurante: { estaCargando: true } });
    expect(debeLlamarApi)
      .toBe(false);
  });
  it("Debe llamar api de solicitarMenuRestaurante debe retornar falso si esta cargando es falso y existen platos en el menu", () => {
    const llamarApi = accionesMenu.solicitarMenuRestaurante()[LLAMAR_API].llamarApi;
    const debeLlamarApi = llamarApi({ menuRestaurante: { estaCargando: false, platosMenu: ["Plato"] } });
    expect(debeLlamarApi)
      .toBe(false);
  });
  it("Debe llamar api de solicitarMenuRestaurante debe retornar verdadero si esta cargando es falso y no existen platos en el menu", () => {
    const llamarApi = accionesMenu.solicitarMenuRestaurante()[LLAMAR_API].llamarApi;
    const debeLlamarApi = llamarApi({ menuRestaurante: { estaCargando: false, platosMenu: [] } });
    expect(debeLlamarApi)
      .toBe(true);
  });
});
