import TableroRestaurante from "../components/TableroRestaurante";
import TableroPedidosPage from "./TableroPedidosPage";
import TableroReservasPage from "./TableroReservasPage";

export default () =>
  TableroRestaurante({
    TableroPedidos: TableroPedidosPage,
    TableroReservas: TableroReservasPage,
  });
