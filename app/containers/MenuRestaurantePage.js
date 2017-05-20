import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MenuRestaurante from "../components/MenuRestaurante";
import { conectarPantallaCargando } from "../components/PantallaCargando";
import { solicitarMenuRestaurante } from "../actions/menuRestaurante";

const mapStateToProps = ({ menuRestaurante }) => ({
  platosMenu: menuRestaurante.platosMenu,
  estaCargando: menuRestaurante.estaCargando
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ solicitarMenuRestaurante }, dispatch);

const menuConCargando = conectarPantallaCargando(MenuRestaurante);

export default connect(mapStateToProps, mapDispatchToProps)(menuConCargando);
