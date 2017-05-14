import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TableroPedidos from "../components/TableroPedidos";
import { subscribirCambiosPedidos } from "../actions/tableroPedidos";

function mapStateToProps({ pedidos }) {
  return {
    pedidos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ subscribirCambiosPedidos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TableroPedidos);
