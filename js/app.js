
// se define la lista de productos disponibles para comprar con su respectivo precio
var productos = [
    { idProducto: 1, nombre: 'router', descripcion: 'Router inalámbrico marca Dlink', precio: 150000 },
    { idProducto: 2, nombre: 'antena', descripcion: 'LiteBeam 5Ghz', precio: 230000 },
    { idProducto: 3, nombre: 'internet', descripcion: 'Dedicado 1:1', precio: 80000 },
    { idProducto: 4, nombre: 'amplificador', descripcion: 'Amplicifador de rango 5Ghz', precio: 200000 }
];


var bdClientes = [];

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
    constructor(idCliente, nombreCliente, apellidoCliente, telefono, email) {
        this.idCliente=idCliente,
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
        this.iva = this.subtotal * 0.19;
    }

    Total() {
        this.total = this.subtotal + this.iva;
    }
}

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

function showProductTable(tabla, targetId, modalGroup) {
    var table = document.getElementById(targetId);
    table.tBodies[0].innerHTML='';
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
        miBoton.setAttribute('data-bs-target', `#edit${modalGroup}Modal`);
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
        miBoton2.setAttribute('data-bs-target', `#del${modalGroup}Modal`);
        miBoton2.title = 'Borrar';
        let miSpan2 = document.createElement("span");
        miSpan2.classList.add("bi");
        miSpan2.classList.add("bi-pen");
        miBoton2.appendChild(miSpan2);

        cell1.appendChild(miBoton) ;
        cell1.appendChild(miBoton2) ;

    }

}


showProductTable(productos, "productTable", "product");

function ordenarproductos() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    console.table(productos);
}

function ocultaph() {
    Array.from(document.getElementsByClassName('ph')).map(container => container.className='ph inactivo');
}

function desactivaBoton() {
    Array.from(document.getElementsByClassName('nav-link')).map(navButton => navButton.className='nav-link text-white');
}

window.onload = function () {

    let nav = Array.from(document.getElementsByClassName('nav-link'));
    nav.map(button => button.onclick = () => {
        ocultaph();
        desactivaBoton();
        document.getElementById(button.dataset["phtarget"]).className = "ph";
        button.className= 'nav-link text-white active';
    });

}

$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
});





