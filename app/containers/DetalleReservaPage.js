import DetalleElemento from "../components/DetalleElemento";

const reserva = {
  id: 16,
  nombre: "Reserva Nº16",
  prioridad: 3,
  fechaSolicitud: new Date("2017-01-01T12:15:10.000Z"),
  ordenes: [
    {
      id: 1,
      nombre: "Suspiro limeño",
      descripcion:
        "Descripcion del plato Suspiro limeño. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus odio, vel feugiat velit. Maecenas velit mauris, tincidunt tincidunt maximus ut, tristique at arcu. Proin leo nulla, faucibus sit amet magna at, dictum semper mauris.",
      precio: 1500,
      tiempoAproximadoPreparacion: 15,
      urlFotoPlato: "http://localhost:8080/img/platos/suspiro-limeño.jpg",
      habilitado: true,
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "Lomo Saltado",
      descripcion:
        "Descripcion del plato Lomo Saltado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus odio, vel feugiat velit. Maecenas velit mauris, tincidunt tincidunt maximus ut, tristique at arcu. Proin leo nulla, faucibus sit amet magna at, dictum semper mauris.",
      precio: 1500,
      tiempoAproximadoPreparacion: 15,
      urlFotoPlato: "http://localhost:8080/img/platos/lomo-saltado.jpg",
      habilitado: true,
      cantidad: 2,
    },
    {
      id: 3,
      nombre: "Maki Ahuancainado",
      descripcion:
        "Descripcion del plato Maki Ahuancainado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus odio, vel feugiat velit. Maecenas velit mauris, tincidunt tincidunt maximus ut, tristique at arcu. Proin leo nulla, faucibus sit amet magna at, dictum semper mauris.",
      precio: 1500,
      tiempoAproximadoPreparacion: 15,
      urlFotoPlato: "http://localhost:8080/img/platos/maki-ahuancainado.jpg",
      habilitado: true,
      cantidad: 3,
    },
    {
      id: 4,
      nombre: "Aji de Gallina",
      descripcion:
        "Descripcion del plato Aji de Gallina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus odio, vel feugiat velit. Maecenas velit mauris, tincidunt tincidunt maximus ut, tristique at arcu. Proin leo nulla, faucibus sit amet magna at, dictum semper mauris.",
      precio: 1500,
      tiempoAproximadoPreparacion: 15,
      urlFotoPlato: "http://localhost:8080/img/platos/aji-de-gallina.jpg",
      habilitado: true,
      cantidad: 4,
    },
    {
      id: 5,
      nombre: "Ceviche Pescado",
      descripcion:
        "Descripcion del plato Ceviche Pescado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus odio, vel feugiat velit. Maecenas velit mauris, tincidunt tincidunt maximus ut, tristique at arcu. Proin leo nulla, faucibus sit amet magna at, dictum semper mauris.",
      precio: 1500,
      tiempoAproximadoPreparacion: 15,
      urlFotoPlato: "http://localhost:8080/img/platos/ceviche-pescado.jpg",
      habilitado: true,
      cantidad: 5,
    },
    {
      id: 6,
      nombre: "Papa a la Huancaina",
      descripcion:
        "Descripcion del plato Papa a la Huancaina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus odio, vel feugiat velit. Maecenas velit mauris, tincidunt tincidunt maximus ut, tristique at arcu. Proin leo nulla, faucibus sit amet magna at, dictum semper mauris.",
      precio: 1500,
      tiempoAproximadoPreparacion: 15,
      urlFotoPlato: "http://localhost:8080/img/platos/papa-a-la-huancaina.jpg",
      habilitado: true,
      cantidad: 6,
    },
    {
      id: 7,
      nombre: "Anticuchos corazon Res",
      descripcion:
        "Descripcion del plato Anticuchos corazon Res. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus odio, vel feugiat velit. Maecenas velit mauris, tincidunt tincidunt maximus ut, tristique at arcu. Proin leo nulla, faucibus sit amet magna at, dictum semper mauris.",
      precio: 1500,
      tiempoAproximadoPreparacion: 15,
      urlFotoPlato: "http://localhost:8080/img/platos/anticuchos-corazon-res.jpg",
      habilitado: true,
      cantidad: 7,
    },
    {
      id: 8,
      nombre: "Suspiro Limeño",
      descripcion:
        "Descripcion del plato Suspiro Limeño. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus odio, vel feugiat velit. Maecenas velit mauris, tincidunt tincidunt maximus ut, tristique at arcu. Proin leo nulla, faucibus sit amet magna at, dictum semper mauris.",
      precio: 1500,
      tiempoAproximadoPreparacion: 15,
      urlFotoPlato: "http://localhost:8080/img/platos/suspiro-limeño.jpg",
      habilitado: true,
      cantidad: 8,
    },
    {
      id: 9,
      nombre: "Pisco Sour",
      descripcion:
        "Descripcion del plato Pisco Sour. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dapibus odio, vel feugiat velit. Maecenas velit mauris, tincidunt tincidunt maximus ut, tristique at arcu. Proin leo nulla, faucibus sit amet magna at, dictum semper mauris.",
      precio: 1500,
      tiempoAproximadoPreparacion: 15,
      urlFotoPlato: "http://localhost:8080/img/platos/pisco-sour.jpg",
      habilitado: true,
      cantidad: 9,
    },
  ],
};

export default () => DetalleElemento(reserva);
