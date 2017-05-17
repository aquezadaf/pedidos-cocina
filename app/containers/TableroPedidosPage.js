import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TableroPedidos from "../components/TableroPedidos";
import { subscribirCambiosPedidos, solicitarPedidos } from "../actions/tableroPedidos";

const mapStateToProps = ({ pedidos }) => ({ pedidos });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ subscribirCambiosPedidos, solicitarPedidos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableroPedidos);
