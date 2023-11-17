import { TipoEmpleado } from "../tipoempleado/tipo-empleado";

export class Empleado {
    idEmpleado:number;
    dni:string;
    nom:string;
    ape:string;
    tel:string;
    user:string;
    clave:string;
    img:string;
    objTipo:TipoEmpleado;

    /**
     *
     */
    constructor() {
        this.idEmpleado = 0;
        this.dni = "";
        this.nom = "";
        this.ape = "";
        this.tel = "";
        this.user = "";
        this.clave = "";
        this.img = "";
        this.objTipo = new TipoEmpleado();
        
    }
}
