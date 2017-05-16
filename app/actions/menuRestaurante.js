export const SOLICITAR_MENU_RESTAURANTE = "SOLICITAR_MENU_RESTAURANTE";
export const CARGAR_MENU_RESTAURANTE = "CARGAR_MENU_RESTAURANTE";

const obtenerMenuRestaurante = () =>
  fetch(`${process.env.API_URL}menu`)
    .then(menu => menu.json());

export const solicitarMenuRestaurante = (dispatch) => () => {
  dispatch({ type: SOLICITAR_MENU_RESTAURANTE });
  return obtenerMenuRestaurante
    .then(menu => dispatch(cargarMenuRestaurante(menu)));
};

export const cargarMenuRestaurante = (menu) => ({ type: CARGAR_MENU_RESTAURANTE, menu });
