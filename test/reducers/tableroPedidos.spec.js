import tableroPedidos from "../../app/reducers/tableroPedidos";
import {
  AGREGAR_PEDIDO,
  ELIMINAR_PEDIDO,
  AUMENTAR_PRIORIDAD_PEDIDO
} from "../../app/actions/tableroPedidos";

describe("Reducer Tablero Pedidos", () => {
  it("Agregar un pedido al ejecutar AGREGAR_PEDIDO", () => {
    const pedidos = [{
      id: 1,
      nombre: "Pedido 1"
    }];
    const nuevoPedido = {
      id: 2,
      nombre: "Pedido 2"
    };
    const pedidosEditados = [{
      id: 1,
      nombre: "Pedido 1"
    }, {
      id: 2,
      nombre: "Pedido 2"
    }];
    expect(tableroPedidos(pedidos, { type: AGREGAR_PEDIDO, pedido: nuevoPedido }))
      .toEqual(pedidosEditados);
  });
  it("Eliminar un pedido al ejecutar ELIMINAR_PEDIDO", () => {
    const pedidos = [{
      id: 1,
      nombre: "Pedido 1"
    }, {
      id: 2,
      nombre: "Pedido 2"
    }, {
      id: 3,
      nombre: "Pedido 3"
    }];
    const idPedidoEliminar = 2;
    const pedidosEditados = [{
      id: 1,
      nombre: "Pedido 1"
    }, {
      id: 3,
      nombre: "Pedido 3"
    }];
    expect(tableroPedidos(pedidos, { type: ELIMINAR_PEDIDO, id: idPedidoEliminar }))
      .toEqual(pedidosEditados);
  });
  it("Debe aumentar en 1 la prioridad de un pedido al ejecutar ELIMINAR_PEDIDO", () => {
    const pedidos = [{
      id: 1,
      prioridad: 0
    }, {
      id: 2,
      prioridad: 1
    }];
    const idPedidoPrioridad = 2;
    const pedidosEditados = [{
      id: 1,
      prioridad: 0
    }, {
      id: 2,
      prioridad: 2
    }];
    expect(tableroPedidos(pedidos, { type: AUMENTAR_PRIORIDAD_PEDIDO, id: idPedidoPrioridad }))
      .toEqual(pedidosEditados);
  });
  it("No debe agregar un pedido si es que el id existe en el store", () => {
    const pedidos = [{
      id: 1,
      nombre: "Pedido 1"
    }, {
      id: 2,
      nombre: "Pedido 2"
    }];
    const nuevoPedido = {
      id: 2,
      nombre: "Pedido 2"
    };
    expect(tableroPedidos(pedidos, { type: AGREGAR_PEDIDO, pedido: nuevoPedido }))
      .toEqual(pedidos);
  });
});
