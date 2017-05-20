import { shallow } from "enzyme";
import React from "react";
import Pedido from "../../app/components/Pedido";

const crearPedidoPrioridad = (prioridad) => {
  const props = {
    nombre: "Pedido 1",
    prioridad,
    fechaSolicitud: new Date(2017, 0, 1, 1, 1, 1),
    ordenes: []
  };

  const pedidoEnzyme = shallow(<Pedido {...props} />);

  return {
    pedidoEnzyme,
    props
  };
};

const crearPedido = () => crearPedidoPrioridad(0);

describe("Componente Pedido", () => {
  it("Debe renderizar componente", () => {
    const { pedidoEnzyme, props } = crearPedido();
    expect(pedidoEnzyme.find(".nombre").text())
      .toEqual(props.nombre);
  });
  it("La cantidad de elementos en la lista debe ser igual a las ordenes del pedido", () => {
    const { pedidoEnzyme, props } = crearPedido();
    expect(pedidoEnzyme.find(".orden").length)
      .toBe(props.ordenes.length);
  });
  it("Debe desplegar la fecha en el formato local de la fecha en que se ejecute la aplicacion", () => {
    const { pedidoEnzyme, props } = crearPedido();
    const textoFechaFormatoLocal = props.fechaSolicitud.toLocaleString();
    expect(pedidoEnzyme.find(".fecha").text())
      .toEqual(textoFechaFormatoLocal);
  });
  it("Debe asignar clase prioridad baja a pedido de prioridad 0", () => {
    const { pedidoEnzyme } = crearPedidoPrioridad(0);
    const divClase = pedidoEnzyme.find("div").first();
    expect(divClase.hasClass("prioridadBaja"))
      .toBe(true);
  });
  it("Debe asignar clase prioridad normal a pedido de prioridad 1", () => {
    const { pedidoEnzyme } = crearPedidoPrioridad(1);
    const divClase = pedidoEnzyme.find("div").first();
    expect(divClase.hasClass("prioridadNormal"))
      .toBe(true);
  });
  it("Debe asignar clase prioridad alta a pedido de prioridad 2", () => {
    const { pedidoEnzyme } = crearPedidoPrioridad(2);
    const divClase = pedidoEnzyme.find("div").first();
    expect(divClase.hasClass("prioridadAlta"))
      .toBe(true);
  });
  it("Debe asignar clase prioridad muy alta a pedido de prioridad 3", () => {
    const { pedidoEnzyme } = crearPedidoPrioridad(3);
    const divClase = pedidoEnzyme.find("div").first();
    expect(divClase.hasClass("prioridadMuyAlta"))
      .toBe(true);
  });
  it("Debe asignar clase prioridad baja a pedido de prioridad inferior a 0", () => {
    const { pedidoEnzyme } = crearPedidoPrioridad(-1);
    const divClase = pedidoEnzyme.find("div").first();
    expect(divClase.hasClass("prioridadBaja"))
      .toBe(true);
  });
  it("Debe asignar clase prioridad muy alta a pedido de prioridad superior a 3", () => {
    const { pedidoEnzyme } = crearPedidoPrioridad(4);
    const divClase = pedidoEnzyme.find("div").first();
    expect(divClase.hasClass("prioridadMuyAlta"))
      .toBe(true);
  });
});
