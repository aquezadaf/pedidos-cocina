import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TableroPedidos from "../components/TableroPedidos";
import { subscribirCambiosPedidos } from "../actions/tableroPedidos";

const mapStateToProps = ({ pedidos }) => ({ pedidos });

const mapDispatchToProps = (dispatch) => bindActionCreators({ subscribirCambiosPedidos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableroPedidos);
