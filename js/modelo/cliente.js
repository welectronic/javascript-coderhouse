export default class cliente {
    constructor(id, ...arg) {
        this.id = id;
        this.nombreCliente = arg[0][0].value;
        this.apellidoCliente = arg[0][1].value;
        this.telefono = arg[0][2].value;
        this.email = arg[0][3].value;
    }
}