export default class totales {
    constructor(subtotal, iva, total) {
        this.subtotal = subtotal,
            this.iva = iva,
            this.total = total
    }

    Iva() {
        this.iva = this.subtotal * 0.19;
    }

    Total() {
        this.total = this.subtotal + this.iva;
    }
}