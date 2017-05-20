import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TableroPedidos from "../components/TableroPedidos";
import { conectarPantallaCargando } from "../components/PantallaCargando";
import { subscribirCambiosPedidos, solicitarPedidos } from "../actions/tableroPedidos";

const mapStateToProps = ({ tableroPedidos }) => ({ tableroPedidos });
const mapStateToPropsPantalla = (state) => mapStateToProps(state).tableroPedidos;

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ subscribirCambiosPedidos, solicitarPedidos }, dispatch);

const tableroConCargando = conectarPantallaCargando(TableroPedidos, mapStateToPropsPantalla);

export default connect(mapStateToProps, mapDispatchToProps)(tableroConCargando);
