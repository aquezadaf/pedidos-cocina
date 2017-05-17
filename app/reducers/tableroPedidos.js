import {
  AGREGAR_PEDIDO,
  ELIMINAR_PEDIDO,
  AUMENTAR_PRIORIDAD_PEDIDO,
  SOLICITAR_PEDIDOS,
  CARGAR_PEDIDOS
} from "../actions/tableroPedidos";

const estadoInicial = {
  pedidos: [],
  estaCargando: false
};

export default (state = estadoInicial, action) => {
  switch (action.type) {
    case AGREGAR_PEDIDO:
      if (state.pedidos.find((pedido) => pedido.id === action.pedido.id)) {
        return state;
      }
      return {
        ...state,
        pedidos: [
          ...state.pedidos,
          action.pedido
        ]
      };
    case ELIMINAR_PEDIDO:
      return {
        ...state,
        pedidos: state.pedidos.filter((pedido) => pedido.id !== action.id)
      };
    case AUMENTAR_PRIORIDAD_PEDIDO:
      return {
        ...state,
        pedidos: state.pedidos.map((pedido) => {
          if (pedido.id !== action.id) {
            return pedido;
          }
          return {
            ...pedido,
            prioridad: pedido.prioridad + 1
          };
        })
      };
    case SOLICITAR_PEDIDOS:
      return {
        ...state,
        estaCargando: true
      };
    case CARGAR_PEDIDOS:
      return {
        pedidos: action.pedidos,
        estaCargando: false
      };
    default:
      return state;
  }
};
