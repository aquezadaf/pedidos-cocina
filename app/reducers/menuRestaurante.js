import { SOLICITAR_MENU_RESTAURANTE, CARGAR_MENU_RESTAURANTE } from "../actions/menuRestaurante";

const estadoInicial = {
  platosMenu: [],
  estaCargando: false
};

export default (state = estadoInicial, action) => {
  switch (action.type) {
    case SOLICITAR_MENU_RESTAURANTE:
      return state;
    case CARGAR_MENU_RESTAURANTE:
      return state;
    default:
      return state;
  }
};
