import { guardaCliente, guardaProducto } from '../lib/lib.js'



let hideTime = 300;
let showTime = 500;

/**
 * función que oculta todos los placeholders
 * @param {*} phClassName clase que identifica los contenedores que deben ser ocupltados
 */
function ocultaph(phClassName) {
    Array.from($('.' + phClassName)).map(container => $(container).hide(hideTime));
}

/**
 * función que desactiva la franja del menú de navegación
 * @param {*} linkClassName clase que identifica los items del menu  
 * @param {*} activeLinkClassName clase que contiene el estilo del item activo
 */
function desactivaBoton(linkClassName, activeLinkClassName) {
    Array.from($('.' + linkClassName)).map(navButton => $(navButton).removeClass(activeLinkClassName));
}
/**
 * Se añaden los eventos a la carga de la página
 * 1. eventos al menú de navegación
 * 2. eventos a los botones de guardado
 */
window.onload = function () {

    let nav = Array.from($('.nav-link'));
    nav.map(button => button.onclick = () => {
        ocultaph('ph');
        desactivaBoton('nav-link', 'active');
        $('#' + button.dataset["phtarget"]).show(showTime, callBackFn[button.dataset['callback']]);
        $(button).addClass('active');
    });

    $('#addProductModal').on('submit', guardaProducto);
    $('#addClientModal').on('submit', guardaCliente);

}

/**
 * Se define un objeto de funciones para hacer la llamada a determinada función callBack, dependiendo de lo que se indique en el contenedor
 */
let callBackFn = {
    /**
     * función que actualiza los gráficos del dashboard
     */

    dashRender: function () {
        myDoughnut.render();
        myLine.render();
        myBar.render();
        myPie.render();
    },
    /**
     * Función que actualiza los select de la plantilla "Nueva Factura"
     */
    nuevaFacturaRender: function () {
        import { productos, cliente } from '../app.js'
        let itemSelList = Array.from($('.select-item'));
        
        itemSelList.map(select => {
            let element = $(select);
            element.html('<option value="" selected>Seleccionar el item</option>');
            productos.map(item => {
                element.append(`<option value="${item.id}" >${item.nombre}</option>`);
            });

        });
        let selClient = $('.select-client');
        selClient.html('<option value="" selected>Seleccionar el cliente</option>');
        cliente.map(elemento => {
            selClient.append(`<option value="${elemento.id}" >${[elemento.nombreCliente, elemento.apellidoCliente].join(' ')}</option>`);
        });

    }
}


