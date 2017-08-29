import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TableroReservas from "../components/TableroReservas";
import { conectarPantallaCargando } from "../components/PantallaCargando";
import { solicitarReservas } from "../actions/tableroReservas";

const mapStateToProps = ({ tableroReservas }) => ({
  estaCargando: tableroReservas.estaCargando,
  reservas: tableroReservas.reservas
});

const mapDispatchToProps = dispatch => bindActionCreators({ solicitarReservas }, dispatch);

const tableroConCargando = conectarPantallaCargando(TableroReservas);

export default connect(mapStateToProps, mapDispatchToProps)(tableroConCargando);
