import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Panel from "../components/Panel";
import { subscribirCambiosPanel } from "../actions/panel";

function mapStateToProps(state) {
  return {
    pedidos: state.panel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ subscribirCambiosPanel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
