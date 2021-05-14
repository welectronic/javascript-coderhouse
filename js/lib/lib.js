import {productos} from '../data/productos.js' //pendiente convertirlo a json
import botonaccion from '../controles/botonaccion.js'

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

        let miBoton = new botonaccion("btn-outline-success",`edit${modalGroup}Modal`,"Editar","bi-pen")
        let miBoton2 = new botonaccion("btn-outline-danger",`del${modalGroup}Modal`,"Borrar","bi-eraser")

        cell1.appendChild(miBoton.Html);
        cell1.appendChild(miBoton2.Html);

    }

}

export function ordenarproductos() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
}



export function guardaProducto(e) {
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
