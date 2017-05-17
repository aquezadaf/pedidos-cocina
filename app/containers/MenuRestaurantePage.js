import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MenuRestaurante from "../components/MenuRestaurante";
import { solicitarMenuRestaurante } from "../actions/menuRestaurante";

const mapStateToProps = ({ menuRestaurante }) => ({ menuRestaurante });

const mapDispatchToProps = (dispatch) => bindActionCreators({ solicitarMenuRestaurante }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuRestaurante);
