// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TableroReservas from "../components/TableroReservas";
import { conectarPantallaCargando } from "../components/PantallaCargando";
// import * as accionesMenuRestaurante from "../actions/menuRestaurante";

// const mapStateToProps = ({ menuRestaurante }) => ({
//   platosMenu: menuRestaurante.platosMenu,
//   estaCargando: menuRestaurante.estaCargando
// });

// const mapDispatchToProps = (dispatch) => bindActionCreators(accionesMenuRestaurante, dispatch);

const reservasConCargando = conectarPantallaCargando(TableroReservas);

export default connect(null, null)(reservasConCargando);
