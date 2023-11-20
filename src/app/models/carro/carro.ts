import { Marca } from "../marca/marca";

export interface TipoMarca {
    idmarca: number;
    descripcion: string;
  }

export class Carro {
    id: number;
    modelo: string;
    origen: string;
    combustible: string;
    precio: number;
    stock: number;
    anio: number;
    nroSerie: string;
    objMarca: Marca;

    constructor(){
        this.id = 0;
        this.modelo = "";
        this.origen ="";
        this.combustible ="";
        this.precio = 0.0;
        this.stock = 0;
        this.anio = 0;
        this.nroSerie = "";
        this.objMarca = new Marca();
    }
}
