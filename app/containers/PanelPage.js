import { connect } from "react-redux";
import Panel from "../components/Panel";

function mapStateToProps(state) {
  return {
    pedidos: state.panel
  };
}

export default connect(mapStateToProps, null)(Panel);
