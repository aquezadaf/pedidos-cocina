import { SOLICITAR_MENU_RESTAURANTE, CARGAR_MENU_RESTAURANTE, HABILITAR_PLATO_MENU, DESHABILITAR_PLATO_MENU } from "../actions/menuRestaurante";

const estadoInicial = {
  platosMenu: [],
  estaCargando: false
};

const modificarPedidoHabilidado = (platosMenu, idPlatoMenu, estaHabilitado) =>
  platosMenu.map(plato => {
    if (plato.id === idPlatoMenu) {
      return {
        ...plato,
        habilitado: estaHabilitado
      };
    }
    return plato;
  });

export default (state = estadoInicial, action) => {
  switch (action.type) {
    case SOLICITAR_MENU_RESTAURANTE:
      return {
        ...state,
        estaCargando: true
      };
    case CARGAR_MENU_RESTAURANTE:
      return {
        platosMenu: action.platosMenu,
        estaCargando: false
      };
    case HABILITAR_PLATO_MENU:
      return {
        ...state,
        platosMenu: modificarPedidoHabilidado(state.platosMenu, action.idPlatoMenu, true)
      };
    case DESHABILITAR_PLATO_MENU:
      return {
        ...state,
        platosMenu: modificarPedidoHabilidado(state.platosMenu, action.idPlatoMenu, false)
      };
    default:
      return state;
  }
};
