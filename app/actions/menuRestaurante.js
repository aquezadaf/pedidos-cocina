import { LLAMAR_API } from "../middleware/apiMiddleware";

export const SOLICITAR_MENU_RESTAURANTE = "SOLICITAR_MENU_RESTAURANTE";
export const CARGAR_MENU_RESTAURANTE = "CARGAR_MENU_RESTAURANTE";
export const ERROR_SOLICITUD_MENU = "ERROR_SOLICITUD_MENU";
export const HABILITAR_PLATO_MENU = "HABILITAR_PLATO_MENU";
export const DESHABILITAR_PLATO_MENU = "DESHABILITAR_PLATO_MENU";

const debeObtenerMenuRestaurante = ({ menuRestaurante }) => {
  if (menuRestaurante.estaCargando) {
    return false;
  } else if (menuRestaurante.platosMenu && menuRestaurante.platosMenu.length > 0) {
    return false;
  }
  return true;
};

export const solicitarMenuRestaurante = () => ({
  [LLAMAR_API]: {
    types: [SOLICITAR_MENU_RESTAURANTE, CARGAR_MENU_RESTAURANTE, ERROR_SOLICITUD_MENU],
    endpoint: "menu",
    nombrePayloadFetch: "platosMenu",
    llamarApi: debeObtenerMenuRestaurante
  }
});

export const habilitarPlatoMenu = (idPlatoMenu) => ({
  type: HABILITAR_PLATO_MENU,
  idPlatoMenu
});

export const deshabilitarPlatoMenu = (idPlatoMenu) => ({
  type: DESHABILITAR_PLATO_MENU,
  idPlatoMenu
});
