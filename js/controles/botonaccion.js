export default class botonaccion {
/**
 * @param {*} type Tipo de boton a generar
 * @param {*} modalTarget ID del modal a ejecutar cuando se hace click en el botón
 * @param {*} title Texto de la etiqueta que tendrá el botón
 * @param {*} iconClass SVG del botón
 */
    constructor(type, modalTarget, title, iconClass) {
        this.type = type;
        this.modalTarget = modalTarget;
        this.title = title;
        this.iconClass = iconClass;
        this.render();
    }
    render() {
        this.Html = $(`<button class="btn ${this.type} me-1" data-bs-toggle="modal" data-bs-target="#${this.modalTarget}" title="${this.title}">
                    <span class="bi ${this.iconClass}"></span>
                    </button>`)[0];
    }
}