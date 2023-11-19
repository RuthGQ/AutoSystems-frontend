import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carro/carro.service';
import { Carro} from '../../models/carro/carro'
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit{

  data: any[]=[];
  carroArray: Carro[]=[]
  constructor(private apiService: CarroService){}

  ngOnInit(): void {
    this.llenarData();
 } 

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      this.carroArray=data;
      console.log(this.data);
      console.log(this.carroArray);
      HTMLFormControlsCollection
    })
  }
  formCarro= new FormGroup({
    id: new FormControl(''),
    modelo: new FormControl(''),
    origen: new FormControl(''),
    combustible: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
    anio: new FormControl(''),
    nroSerie: new FormControl(''),
    objMarca: new FormControl('')

  })

  Agregar(){
    console.log(this.formCarro.value);
    this.apiService.agregarCarro(this.formCarro.value).subscribe((result)=>{
      console.log(result);
    })
  }
  
  eliminar(id: number) {
    this.apiService.eliminarCarro(id).subscribe(result => {
      console.log(result);
      this.llenarData();
    });
  }

}
