export const SOLICITAR_MENU_RESTAURANTE = "SOLICITAR_MENU_RESTAURANTE";
export const CARGAR_MENU_RESTAURANTE = "CARGAR_MENU_RESTAURANTE";

const debeObtenerMenuRestaurante = ({ menuRestaurante }) => {
  if (menuRestaurante.estaCargando) {
    return false;
  } else if (menuRestaurante.platosMenu && menuRestaurante.platosMenu.length > 0) {
    return false;
  }
  return true;
}
const obtenerMenuRestaurante = () =>
  fetch(`${process.env.API_URL}menu`)
    .then(menu => menu.json());

export const solicitarMenuRestaurante = () => (dispatch, getState) => {
  if (debeObtenerMenuRestaurante(getState())) {
    dispatch({ type: SOLICITAR_MENU_RESTAURANTE });
    return obtenerMenuRestaurante()
      .then(menu => dispatch(cargarMenuRestaurante(menu)));
  }
};

export const cargarMenuRestaurante = (platosMenu) =>
  ({ type: CARGAR_MENU_RESTAURANTE, platosMenu });
