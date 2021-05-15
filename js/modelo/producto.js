//Se define el objeto que almacena y maneja el valor unitario de cada item comprado
export default class producto {
    /**
     * 
     * @param {*} id Consecutivo de la lista a agregar
     * @param  {...any} arg lista ordenada de campos del formulario: nombre, descripción y precio
     */
    constructor(id,...arg) {
        this.id = id;
        this.nombre = arg[0][0].value;
        this.descripción = arg[0][1].value;
        this.precio=arg[0][2].value;
    }
}