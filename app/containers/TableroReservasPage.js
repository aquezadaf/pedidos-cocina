import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TableroReservas from "../components/TableroReservas";
import { conectarPantallaCargando } from "../components/PantallaCargando";
import * as accionesTableroReservas from "../actions/tableroReservas";

// const mapStateToProps = ({ menuRestaurante }) => ({
//   platosMenu: menuRestaurante.platosMenu,
//   estaCargando: menuRestaurante.estaCargando
// });

const mapDispatchToProps = (dispatch) => bindActionCreators(accionesTableroReservas, dispatch);

const reservasConCargando = conectarPantallaCargando(TableroReservas);

export default connect(null, mapDispatchToProps)(reservasConCargando);
