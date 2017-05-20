import tableroPedidos from "../../app/reducers/tableroPedidos";
import {
  AGREGAR_PEDIDO,
  ELIMINAR_PEDIDO,
  AUMENTAR_PRIORIDAD_PEDIDO,
  SOLICITAR_PEDIDOS,
  CARGAR_PEDIDOS
} from "../../app/actions/tableroPedidos";

describe("Reducer Tablero Pedidos", () => {
  it("Agregar un pedido al ejecutar AGREGAR_PEDIDO", () => {
    const estadoInicial = {
      pedidos: [
        { id: 1, nombre: "Pedido 1" }
      ],
      estaCargando: true
    };
    const nuevoPedido = {
      id: 2,
      nombre: "Pedido 2"
    };
    const nuevoEstado = {
      pedidos: [
        { id: 1, nombre: "Pedido 1" },
        { id: 2, nombre: "Pedido 2" }
      ],
      estaCargando: true
    };
    expect(tableroPedidos(estadoInicial, { type: AGREGAR_PEDIDO, pedido: nuevoPedido }))
      .toEqual(nuevoEstado);
  });
  it("Eliminar un pedido al ejecutar ELIMINAR_PEDIDO", () => {
    const estadoInicial = {
      pedidos: [
        { id: 1, nombre: "Pedido 1" },
        { id: 2, nombre: "Pedido 2" },
        { id: 3, nombre: "Pedido 3" }
      ],
      estaCargando: true
    };
    const idPedidoEliminar = 2;
    const nuevoEstado = {
      pedidos: [
        { id: 1, nombre: "Pedido 1" },
        { id: 3, nombre: "Pedido 3" }
      ],
      estaCargando: true
    };
    expect(tableroPedidos(estadoInicial, { type: ELIMINAR_PEDIDO, id: idPedidoEliminar }))
      .toEqual(nuevoEstado);
  });
  it("Debe aumentar en 1 la prioridad de un pedido al ejecutar ELIMINAR_PEDIDO", () => {
    const estadoInicial = {
      pedidos: [
        { id: 1, prioridad: 0 },
        { id: 2, prioridad: 1 }
      ],
      estaCargando: true
    };
    const idPedidoPrioridad = 2;
    const nuevoEstado = {
      pedidos: [
        { id: 1, prioridad: 0 },
        { id: 2, prioridad: 2 }
      ],
      estaCargando: true
    };
    expect(tableroPedidos(estadoInicial, { type: AUMENTAR_PRIORIDAD_PEDIDO, id: idPedidoPrioridad }))
      .toEqual(nuevoEstado);
  });
  it("No debe agregar un pedido si es que el id existe en el store", () => {
    const estadoInicial = {
      pedidos: [
        { id: 1, nombre: "Pedido 1" },
        { id: 2, nombre: "Pedido 2" },
        { id: 3, nombre: "Pedido 3" }
      ],
      estaCargando: true
    };
    const nuevoPedido = {
      id: 2,
      nombre: "Pedido 2"
    };
    const nuevoEstado = {
      pedidos: [
        { id: 1, nombre: "Pedido 1" },
        { id: 2, nombre: "Pedido 2" },
        { id: 3, nombre: "Pedido 3" }
      ],
      estaCargando: true
    };
    expect(tableroPedidos(estadoInicial, { type: AGREGAR_PEDIDO, pedido: nuevoPedido }))
      .toEqual(nuevoEstado);
  });
  it("Solicitar pedidos debe dejar cargando en verdadero", () => {
    const estadoInicial = {
      pedidos: [],
      estaCargando: false
    };
    const nuevoEstado = {
      pedidos: [],
      estaCargando: true
    };
    expect(tableroPedidos(estadoInicial, { type: SOLICITAR_PEDIDOS }))
      .toEqual(nuevoEstado);
  });
  it("Cargar pedidos debe sobrescribir los pedidos y dejar cargando en falso", () => {
    const estadoInicial = {
      pedidos: [
        { id: 1, nombre: "Pedido 1" },
        { id: 2, nombre: "Pedido 2" },
        { id: 3, nombre: "Pedido 3" }
      ],
      estaCargando: true
    };
    const pedidosCarga = [
      { id: 4, nombre: "Pedido 4" },
      { id: 5, nombre: "Pedido 5" },
      { id: 6, nombre: "Pedido 6" }
    ];
    const nuevoEstado = {
      pedidos: [
        { id: 4, nombre: "Pedido 4" },
        { id: 5, nombre: "Pedido 5" },
        { id: 6, nombre: "Pedido 6" }
      ],
      estaCargando: false
    };
    expect(tableroPedidos(estadoInicial, { type: CARGAR_PEDIDOS, pedidos: pedidosCarga }))
      .toEqual(nuevoEstado);
  });
});
