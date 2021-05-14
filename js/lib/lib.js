import { productos } from '../data/productos.js' //pendiente convertirlo a json
import botonaccion from '../controles/botonaccion.js'
import producto from '../modelo/producto.js'
/**
 * 
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

export function ordenarproductos() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

export function guardaProducto(e) {
    e.preventDefault();
    let formData = $('#' + e.target.id + ' input');
    let agregado = new producto(productos.length + 1, formData)
    productos.push(agregado);
    formData[0].reset();
    $('#addProductModal').modal('hide');
    showProductTable(productos, "productTable", "Product");
}
