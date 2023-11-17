import { Carro } from "../carro/carro";
import { Venta } from "../venta/venta";

export class DetalleVenta {
    id: number;
    precio: number;
    cantidad: number;
    descripcionC: string;
    subtotal: number;
    venta: Venta;
    carro: Carro;

    constructor(){
        this.id = 0;
        this.precio = 0.0;
        this.cantidad = 0;
        this.descripcionC = "";
        this.subtotal = 0.0;
        this.venta = new Venta();
        this.carro = new Carro();
    }
}
