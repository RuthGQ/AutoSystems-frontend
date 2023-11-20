import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carro/carro.service';
import { FormGroup,FormControl} from '@angular/forms'
import { Marca } from 'src/app/models/marca/marca'

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit{

  data: any[]=[];
  formCarro = new FormGroup({
    modelo: new FormControl(''),
    origen: new FormControl(''),
    combustible: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
    anio: new FormControl(''),
    nroSerie: new FormControl(''),
    objMarca: new FormControl('')

  });
  carroEditando:  any = null;

  objMarca: Marca[] = [
    { idmarca: 1, descripcion:"Audi"},
    { idmarca: 2, descripcion:"Suzuki"},
    { idmarca: 3, descripcion:"Haval"},
    { idmarca: 4, descripcion:"Great Wall"},
    { idmarca: 5, descripcion:"Honda"},
    { idmarca: 6, descripcion:"Mazda"},
    { idmarca: 7, descripcion:"Changan"},
    { idmarca: 8, descripcion:"Mercedes-Benz"}
  ]


  constructor(private apiService: CarroService){}

  ngOnInit(): void {
    this.llenarData();
 } 

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      console.log(this.data);
    });
  }
  
  Agregar(){
    this.apiService.agregarCarro(this.formCarro.value).subscribe((result)=>{
      console.log(result);
      this.limpiarFormulario();
      this.llenarData();
    },
    error => {
      console.error('Error al agregar Carro', error);
    }
    );
  }

  ActualizarCarro() {
    if (this.carroEditando && this.carroEditando.id) {
      const id = { ...this.formCarro.value, id: this.carroEditando.id};

      this.apiService.actualizarCarro(id).subscribe(
        result => {
          console.log('Respuesta del servidor', result);
          this.limpiarFormulario();
          this.llenarData();
          this.carroEditando = null;
        },
      );
    }
  }

  editarCarro(carro: any) {
    if(carro.id) {
      this.formCarro.setValue({
        modelo: carro.modelo,
        origen: carro.origen,
        combustible: carro.combustible,
        precio: carro.precio,
        stock: carro.stock,
        anio: carro.anio,
        nroSerie: carro.nroSerie,
        objMarca: carro.objMarca,
      });
      this.carroEditando = carro;
    }
  }
 
  limpiarFormulario() {
    this.formCarro.reset();
    this.carroEditando = null;
  }
  
  eliminar(id: number) {
    this.apiService.eliminarCarro(id).subscribe(result => {
      console.log(result);
      this.llenarData();
    });
  }

}
