import {guardaProducto} from '../lib/lib.js'


function ocultaph() {
    Array.from(document.getElementsByClassName('ph')).map(container => container.className = 'ph inactivo');
}

function desactivaBoton() {
    Array.from(document.getElementsByClassName('nav-link')).map(navButton => navButton.classList.remove('active'));
}

window.onload = function () {

    let nav = Array.from(document.getElementsByClassName('nav-link'));
    nav.map(button => button.onclick = () => {
        ocultaph();
        desactivaBoton();
        document.getElementById(button.dataset["phtarget"]).className = "ph";
        button.classList.add('active');
    });

    let boton = document.getElementById('btnGuardaProducto');

    boton.onclick = () =>{
        guardaProducto();
    }

}
