import menuRestaurante from "../../app/reducers/menuRestaurante";
import {
  SOLICITAR_MENU_RESTAURANTE,
  CARGAR_MENU_RESTAURANTE,
  HABILITAR_PLATO_MENU,
  DESHABILITAR_PLATO_MENU
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
  it("Habilitar plato menu debe dejar habilitado en verdadero para el plato seleccionado", () => {
    const estadoInicial = {
      platosMenu: [
        { id: 1, habilitado: false },
        { id: 2, habilitado: true },
        { id: 3, habilitado: false }
      ],
      estaCargando: false
    };
    const idPlatoMenu = 3;
    const nuevoEstado = {
      platosMenu: [
        { id: 1, habilitado: false },
        { id: 2, habilitado: true },
        { id: 3, habilitado: true }
      ],
      estaCargando: false
    };
    const estadoGenerado = menuRestaurante(estadoInicial, {
      type: HABILITAR_PLATO_MENU,
      idPlatoMenu
    });
    expect(estadoGenerado)
      .toEqual(nuevoEstado);
  });
  it("Deshabilitar plato menu debe dejar habilitado en falso para el plato seleccionado", () => {
    const estadoInicial = {
      platosMenu: [
        { id: 1, habilitado: false },
        { id: 2, habilitado: true },
        { id: 3, habilitado: false }
      ],
      estaCargando: false
    };
    const idPlatoMenu = 2;
    const nuevoEstado = {
      platosMenu: [
        { id: 1, habilitado: false },
        { id: 2, habilitado: false },
        { id: 3, habilitado: false }
      ],
      estaCargando: false
    };
    const estadoGenerado = menuRestaurante(estadoInicial, {
      type: DESHABILITAR_PLATO_MENU,
      idPlatoMenu
    });
    expect(estadoGenerado)
      .toEqual(nuevoEstado);
  });
});
