import panel from "../../app/reducers/panel";
import { AGREGAR_PEDIDO, ELIMINAR_PEDIDO } from "../../app/actions/panel";

describe("Reducer panel", () => {
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
    expect(panel(pedidos, { type: AGREGAR_PEDIDO, pedido: nuevoPedido }))
      .toEqual(pedidosEditados);
  });
  it("ELiminar un pedido al ejecutar ELIMINAR_PEDIDO", () => {
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
    const indicePedidoEliminar = 1;
    const pedidosEditados = [{
      id: 1,
      nombre: "Pedido 1"
    }, {
      id: 3,
      nombre: "Pedido 3"
    }];
    expect(panel(pedidos, { type: ELIMINAR_PEDIDO, indice: indicePedidoEliminar }))
      .toEqual(pedidosEditados);
  });
});
