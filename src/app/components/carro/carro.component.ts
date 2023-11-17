import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carro.service';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit{

  data: any[]=[];

  constructor(private apiService: CarroService){}

  ngOnInit(): void {
      this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }
  formCarro=new FormGroup({
    descripcion: new FormControl(''),
    origen: new FormControl(''),
    combustible: new FormControl(''),
    marca: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl('')
    
  })

}
