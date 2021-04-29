import articulo from './modelo/articulo.js'
import clientes from './modelo/clientes.js'
import totales from './modelo/totales.js'
import {} from './eventos/eventos.js'
import {productos} from './data/productos.js'

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


function showProductTable(tabla, targetId, modalGroup) {
    var table = document.getElementById(targetId);
    table.tBodies[0].innerHTML = '';
    for (let i = 0; i < tabla.length; i++) {
        let row = table.tBodies[0].insertRow(i);
        let j = 0;
        for (const property in tabla[i]) {
            let cell1 = row.insertCell(j);
            cell1.innerHTML = tabla[i][property];
            j++;
        }
        let cell1 = row.insertCell(j);

        let miBoton = document.createElement("button");
        miBoton.classList.add("btn");
        miBoton.classList.add("btn-outline-success");
        miBoton.classList.add("me-1");
        miBoton.setAttribute('data-bs-toggle', 'modal');
        miBoton.setAttribute('data-itemId', tabla[i].id);
        miBoton.setAttribute('data-bs-target', `#edit${modalGroup}Modal`);
        miBoton.id = 'btnEditar' + tabla[i].id;
        miBoton.title = 'Editar';
        let miSpan = document.createElement("span");
        miSpan.classList.add("bi");
        miSpan.classList.add("bi-pen");
        miBoton.appendChild(miSpan);

        let miBoton2 = document.createElement("button");
        miBoton2.classList.add("btn");
        miBoton2.classList.add("btn-outline-danger");
        miBoton2.classList.add("me-1");
        miBoton2.setAttribute('data-bs-toggle', 'modal');
        miBoton.setAttribute('data-itemId', tabla[i].id);
        miBoton2.setAttribute('data-bs-target', `#del${modalGroup}Modal`);
        miBoton2.id = 'btnBorrar' + tabla[i].id;
        miBoton2.title = 'Borrar';
        let miSpan2 = document.createElement("span");
        miSpan2.classList.add("bi");
        miSpan2.classList.add("bi-eraser");
        miBoton2.appendChild(miSpan2);

        cell1.appendChild(miBoton);
        cell1.appendChild(miBoton2);

    }

}


showProductTable(productos, "productTable", "Product");

function ordenarproductos() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
}


function guardaProducto(e) {
    let nombre = document.getElementById('ctrlAddNombreProd');
    let desc = document.getElementById('ctrlAddDescProd');
    let precio = document.getElementById('ctrlAddPrecioProd');

    if(nombre.value == '' || desc.value == '' || precio.value == ''){
        $('#addProductModal').modal('hide');
        return;
    }

    productos.push({
        id: productos.length + 1,
        nombre: nombre.value.toLowerCase(),
        descripcion: desc.value,
        precio: precio.value
    });
    $('#addProductModal').modal('hide');
    nombre.value = "";
    desc.value = "";
    precio.value = "";
    showProductTable(productos, "productTable", "Product");
}

