
// se define la lista de productos disponibles para comprar con su respectivo precio
const productos = [
    { nombre: 'router', precio: 150000 },
    { nombre: 'antena', precio: 230000 },
    { nombre: 'internet', precio: 80000 },
    { nombre: 'amplificador', precio: 200000 }
];

console.log('listado de productos');
console.table(productos);

//Se define el objeto que almacena y maneja el valor unitario de cada item comprado
class articulo {
    constructor(item, concepto, cantidad) {
        this.item = item;
        this.concepto = concepto;
        this.cantidad = cantidad;
        this.valor = 0;
    }
    valorUnitario() {
        this.valor = this.cantidad * productos.filter(x => x.nombre == this.concepto)[0].precio
    }
}

class clientes {
    constructor(nombreCliente, apellidoCliente, telefono, email) {
        this.nombreCliente = nombreCliente,
        this.apellidoCliente = apellidoCliente,
        this.telefono = telefono,
        this.email = email
    }
}

class totales {
    constructor(subtotal, iva, total) {
        this.subtotal = subtotal,
        this.iva = iva,
        this.total = total
    }

    Iva() {
        this.total.iva = this.total.subtotal * 0.19;
    }

    Total() {
        this.total.total = this.total.subtotal + this.total.iva;
    }
}

let factura = {
    numeroFactura: String,
    fecha: String,
    cliente: clientes,
    producto: [],
    total: totales,
    SubTotal: function () {
        this.total.subtotal = factura.producto.map(x => x.valor).reduce((a, b) => a + b)
    },
    calculoFactura: function () {
        this.SubTotal();
        this.total.Iva();
        this.total.Total();
    }
};

factura.cliente.nombreCliente = prompt('Escribe tu nombre');
factura.cliente.apellidoCliente = prompt('Escribe tu apellido');
factura.cliente.telefono = prompt('Escribe tu numero de teléfono');
factura.cliente.email = prompt('Escribe tu email');

let newItem = true;

while (newItem != false) {
    let concepto = prompt('¿Qué quieres comprar?');
    let cantidad = prompt('Cantidad requerida');
    factura.producto.push(new articulo(factura.producto.length + 1, concepto, cantidad))
    factura.producto[factura.producto.length - 1].valorUnitario();
    newItem = confirm('Deseas agregar un nuevo producto?');
}

factura.numeroFactura = '001'; // dependerá de un ente externo
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
factura.fecha = hoy.toLocaleDateString();

factura.calculoFactura();
console.table(factura.producto)
console.table(factura.total)

function ordenarproductos() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    console.table(productos);
}



