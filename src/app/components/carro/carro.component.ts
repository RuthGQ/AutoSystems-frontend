// carro.component.ts
import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carro/carro.service';
import { Carro } from '../../models/carro/carro';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  datacar: any[] = [];
  marcas: any[] = []; 

  nuevoCarro = new FormGroup({
    id: new FormControl(''),
    modelo: new FormControl(''),
    idMarca: new FormControl(''),
    origen: new FormControl(''),
    combustible: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl('')
  });
  
  constructor(private apiService: CarroService) {}

  ngOnInit(): void {
    this.llenarData();    
  }

  llenarData() {
    this.apiService.getData().subscribe(datacar => {
      this.datacar = datacar;
      console.log(this.datacar);
    });
  }

  cargarMarcas() {
    this.apiService.obtenerMarcas().subscribe(marcas => {
      this.marcas = marcas;
      console.log(this.marcas);
    });
  }


  eliminar(id: number) {
    this.apiService.eliminarCarro(id).subscribe(result => {
      console.log(result);
      this.llenarData();
    });
  }

  limpiarFormulario() {
    this.nuevoCarro.reset();
  }
}