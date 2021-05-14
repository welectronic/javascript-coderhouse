import { productos } from '../data/productos.js' //pendiente convertirlo a json
import botonaccion from '../controles/botonaccion.js'
import producto from '../modelo/producto.js'
/**
 * función que muestra los datos de un arreglo en una tabla
 * @param {*} arreglo Arreglo que contiene los datos a mostrar en la tabla
 * @param {*} targetId Id de la tabla creada para almacenar los datos
 * @param {*} modalGroup nombre del grupo de modales destinados a hacer el CRUD
 */
export function showProductTable(arreglo, targetId, modalGroup) {
    var table = document.getElementById(targetId);
    table.tBodies[0].innerHTML = '';
    for (let i = 0; i < arreglo.length; i++) {
        let row = table.tBodies[0].insertRow(i);
        let j = 0;
        for (const property in arreglo[i]) {
            let cell1 = row.insertCell(j);
            cell1.innerHTML = arreglo[i][property];
            j++;
        }
        let cell1 = row.insertCell(j);
        let miBoton = new botonaccion("btn-outline-success", `edit${modalGroup}Modal`, "Editar", "bi-pen")
        let miBoton2 = new botonaccion("btn-outline-danger", `del${modalGroup}Modal`, "Borrar", "bi-eraser")
        cell1.appendChild(miBoton.Html);
        cell1.appendChild(miBoton2.Html);
    }
}

/**
 * Función para ordenar un arreglo
 */
export function ordenarproductos() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

/**
 * función invocada al guardar el formulario de guardar productos
 * @param {*} e formulario que desencadena el evento
 */
export function guardaProducto(e) {
    e.preventDefault();
    guardaArreglo(e.target.id, "addProductModal", "productTable", "Product", productos)
}

/**
 * función que guarda la información de un form en un arreglo y muestra los datos en una tabla
 * @param {*} idForm identificador del formulario que se va a guardar
 * @param {*} idModal  identificador del modal que contiene al formulario
 * @param {*} targetId Id de la tabla creada para almacenar los datos
 * @param {*} modalGroup nombre del grupo de modales destinados a hacer el CRUD
 * @param {*} arreglo Arreglo que Almacenará los datos
 */
function guardaArreglo(idForm, idModal, targetId, modalGroup, arreglo) {
    let formData = $('#' + idForm + ' input');
    let agregado = new producto(arreglo.length + 1, formData)
    arreglo.push(agregado);
    $('#' + idForm)[0].reset();
    $('#' + idModal).modal('hide');
    showProductTable(arreglo, targetId, modalGroup);
}
