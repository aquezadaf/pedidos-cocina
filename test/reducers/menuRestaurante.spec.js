import menuRestaurante from "../../app/reducers/menuRestaurante";
import {
  SOLICITAR_MENU_RESTAURANTE,
  CARGAR_MENU_RESTAURANTE
} from "../../app/actions/menuRestaurante";

describe("Reducer Menu Restaurante", () => {
  it("Solicitar menu debe dejar cargando en verdadero", () => {
    const estadoInicial = {
      platosMenu: [],
      estaCargando: false
    };
    const nuevoEstado = {
      platosMenu: [],
      estaCargando: true
    };
    expect(menuRestaurante(estadoInicial, { type: SOLICITAR_MENU_RESTAURANTE }))
      .toEqual(nuevoEstado);
  });
  it("Cargar menu debe sobrescribir los platos del menu y dejar cargando en falso", () => {
    const estadoInicial = {
      platosMenu: ["Primer plato", "Segundo plato", "Tercer plato"],
      estaCargando: true
    };
    const platosCarga = ["Nuevo primer plato", "Nuevo segundo plato", "Nuevo tercer plato"];
    const nuevoEstado = {
      platosMenu: ["Nuevo primer plato", "Nuevo segundo plato", "Nuevo tercer plato"],
      estaCargando: false
    };
    const estadoGenerado = menuRestaurante(estadoInicial, {
      type: CARGAR_MENU_RESTAURANTE,
      platosMenu: platosCarga
    });
    expect(estadoGenerado)
      .toEqual(nuevoEstado);
  });
});
