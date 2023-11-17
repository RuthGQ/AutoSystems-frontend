import { Cliente } from "../cliente/cliente";
import { Empleado } from "../empleado/empleado";

export class Venta {
    id: number;
    numserie: string;
    fecha: Date;
    monto: number;
    cliente: Cliente;
    empleado: Empleado;


    constructor(){
        this.id = 0;
        this.numserie = "";
        this.fecha = new Date();
        this.monto = 0.0;
        this.cliente = new Cliente();
        this.empleado = new Empleado();
    }
}
