import articulo from './modelo/articulo.js'
import clientes from './modelo/clientes.js'
import totales from './modelo/totales.js'
import {} from './eventos/eventos.js'
import {productos} from './data/productos.js'
import {showProductTable} from './lib/lib.js'


var bdClientes = [];

let factura = {
    numeroFactura: String,
    fecha: String,
    cliente: clientes,
    producto: [],
    total: new totales(),
    SubTotal: function () {
        this.total.subtotal = factura.producto.map(x => x.valor).reduce((a, b) => a + b)
    },
    calculoFactura: function () {
        this.SubTotal();
        this.total.Iva();
        this.total.Total();
    }
};

/* factura.cliente.nombreCliente = prompt('Escribe tu nombre');
factura.cliente.apellidoCliente = prompt('Escribe tu apellido');
factura.cliente.telefono = prompt('Escribe tu numero de teléfono');
factura.cliente.email = prompt('Escribe tu email'); */

let newItem = true;

/* while (newItem != false) {
    let concepto = prompt('¿Qué quieres comprar?');
    let cantidad = prompt('Cantidad requerida');
    factura.producto.push(new articulo(factura.producto.length + 1, concepto, cantidad))
    factura.producto[factura.producto.length - 1].valorUnitario();
    newItem = confirm('Deseas agregar un nuevo producto?');
}  */

factura.numeroFactura = '001'; // dependerá de un ente externo
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
factura.fecha = hoy.toLocaleDateString();

//factura.calculoFactura();

showProductTable(productos, "productTable", "Product");


