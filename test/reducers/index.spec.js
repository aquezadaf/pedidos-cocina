import { createStore } from "redux";
import rootReducer from "../../app/reducers/index";

describe("Root reducer de la aplicacion", () => {
  it("Estado de la aplicacion debe tener todas las propiedades de los reducers", () => {
    const store = createStore(rootReducer);
    const estadoAplicacion = {
      menuRestaurante: {
        estaCargando: false,
        platosMenu: [],
      },
      routing: {
        location: null,
      },
      tableroPedidos: {
        estaCargando: false,
        pedidos: [],
      },
      tableroReservas: {
        estaCargando: false,
        reservas: []
      },
    };

    expect(store.getState()).toEqual(estadoAplicacion);
  });
});
