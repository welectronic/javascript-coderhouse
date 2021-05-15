import clientes from './modelo/clientes.js'
import totales from './modelo/totales.js'
import {} from './eventos/eventos.js'

import {showProductTable} from './lib/lib.js'


var bdClientes = [];

let productos = JSON.parse($.getJSON({'url': "../js/data/productos.json", 'async': false}).responseText);

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


let newItem = true;

factura.numeroFactura = '001'; // dependerá de un ente externo

factura.fecha = new Date(Date.now()).toLocaleDateString();

showProductTable(productos, "productTable", "Product");


