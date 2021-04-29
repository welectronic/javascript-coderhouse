//Se define el objeto que almacena y maneja el valor unitario de cada item comprado
export default class articulo {
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