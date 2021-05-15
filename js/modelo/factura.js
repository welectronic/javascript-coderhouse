import totales from './modelo/totales.js'
export default class factura {
    constructor(numeroFactura, cliente) {
        this.numeroFactura = numeroFactura;
        this.fecha = new Date(Date.now()).toLocaleDateString();
        this.cliente = cliente;
        this.producto = [];
        this.total = new totales();
        this.calculoFactura();
    }

    SubTotal() {
        this.total.subtotal = factura.producto.map(x => x.valor).reduce((a, b) => a + b)
    }
    calculoFactura() {
        this.SubTotal();
        this.total.Iva();
        this.total.Total();
    }
};