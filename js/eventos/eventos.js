import { guardaProducto } from '../lib/lib.js'


function ocultaph() {
    Array.from($('.ph')).map(container => container.className = 'ph inactivo');
}

function desactivaBoton() {
    Array.from($('.nav-link')).map(navButton => navButton.classList.remove('active'));
}

window.onload = function () {

    let nav = Array.from($('.nav-link'));
    nav.map(button => button.onclick = () => {
        ocultaph();
        desactivaBoton();
        $('#' + button.dataset["phtarget"])[0].className = "ph";
        button.classList.add('active');
    });

    $('#btnGuardaProducto').click(() => { guardaProducto(); });

}
