import {} from './eventos/eventos.js'

import {showProductTable} from './lib/lib.js'


let productos = JSON.parse($.getJSON({'url': "../js/data/productos.json", 'async': false}).responseText);
let cliente = JSON.parse($.getJSON({'url': "../js/data/clientes.json", 'async': false}).responseText);

// let factura = {
//     numeroFactura: String,
//     fecha: String,
//     cliente: clientes,
//     producto: [],
//     total: new totales(),
//     SubTotal: function () {
//         this.total.subtotal = factura.producto.map(x => x.valor).reduce((a, b) => a + b)
//     },
//     calculoFactura: function () {
//         this.SubTotal();
//         this.total.Iva();
//         this.total.Total();
//     }
// };



showProductTable(productos, "productTable", "Product");
showProductTable(cliente, "clientTable", "Client");




