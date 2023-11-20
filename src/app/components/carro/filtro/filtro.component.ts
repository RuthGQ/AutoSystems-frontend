import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carro/carro.service';
import { Carro} from '../../../models/carro/carro'
import {FormGroup,FormControl} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuscarCarro } from 'src/app/models/BuscarCarro';

@Component({
  selector: 'app-carro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit{

  data: any[]=[];
  marcas: any[] = [];
  carroArray: Carro[]=[]
  marcaElegida: any = null;
 
  busqueda: BuscarCarro = {
    marca: '',
    modelo: ''
  }

  constructor(
    private apiService: CarroService,
    ){}

  ngOnInit(): void {
    this.listarMarcas();
    this.llenarData();
    //this.listaCarros();
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
    nrserie: new FormControl(''),
    objMarca: new FormControl('')
  })

  listarMarcas(): void {
    this.apiService.filtrarPorMarca().subscribe(
      data => {
        this.marcas = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  listaCarros(marca:string): void {
    this.apiService.buscarCarro(marca).subscribe(
      data => {
        this.data = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onChangeMarca(): void {
    if (this.marcaElegida) {
      console.log(this.marcaElegida)
      this.busqueda.marca =  this.marcaElegida;
      this.listaCarros(this.busqueda.marca);
    } else {
      this.busqueda.marca = '';
      //this.llenarData();
    }
    console.log(this.marcaElegida)

  }
  
}
