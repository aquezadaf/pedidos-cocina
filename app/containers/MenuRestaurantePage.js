import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MenuRestaurante from "../components/MenuRestaurante";
import { conectarPantallaCargando } from "../components/PantallaCargando";
import { solicitarMenuRestaurante } from "../actions/menuRestaurante";

const mapStateToProps = ({ menuRestaurante }) => ({ menuRestaurante });
const mapStateToPropsPantalla = (state) => mapStateToProps(state).menuRestaurante;

const mapDispatchToProps = (dispatch) => bindActionCreators({ solicitarMenuRestaurante }, dispatch);

const menuConCargando = conectarPantallaCargando(MenuRestaurante, mapStateToPropsPantalla);

export default connect(mapStateToProps, mapDispatchToProps)(menuConCargando);
