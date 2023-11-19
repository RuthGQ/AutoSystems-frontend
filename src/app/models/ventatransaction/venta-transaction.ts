import { DetalleVenta } from "../detalleventa/detalle-venta";
import { Venta } from "../venta/venta";

export class VentaTransaction {
    venta:Venta;
    detalleVenta:DetalleVenta[]

    constructor(){
        this.venta = new Venta();
        this.detalleVenta = [];
    }
}
