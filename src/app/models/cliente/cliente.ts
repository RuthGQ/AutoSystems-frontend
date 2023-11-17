export class Cliente {
    idCli: number;
    dni: string;
    nombre: string;
    apellido: string;
    direccion: string;
    correo: string;
    telefono: number;

    constructor(){
        this.idCli = 0;
        this.dni = "";
        this.nombre = "";
        this.apellido = "";
        this.direccion = "";
        this.correo = "";
        this.telefono = 0;
    }
}
