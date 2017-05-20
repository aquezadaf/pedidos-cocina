import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TableroPedidos from "../components/TableroPedidos";
import { conectarPantallaCargando } from "../components/PantallaCargando";
import { subscribirCambiosPedidos, solicitarPedidos } from "../actions/tableroPedidos";

const mapStateToProps = ({ tableroPedidos }) => ({
  pedidos: tableroPedidos.pedidos,
  estaCargando: tableroPedidos.estaCargando
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ subscribirCambiosPedidos, solicitarPedidos }, dispatch);

const tableroConCargando = conectarPantallaCargando(TableroPedidos);

export default connect(mapStateToProps, mapDispatchToProps)(tableroConCargando);
