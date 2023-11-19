import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-filtro-cliente',
  templateUrl: './filtro-cliente.component.html',
  styleUrls: ['./filtro-cliente.component.css']
})
export class FiltroClienteComponent implements OnInit {

  data: any[]=[];
  ClienteArray: Cliente[]=[]

  constructor(
    private apiService: ClienteService,
    ){}

    ngOnInit(): void {
      this.llenarData();
   } 
   llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      this.ClienteArray=data;
      console.log(this.data);
      console.log(this.ClienteArray);
      HTMLFormControlsCollection
    })
}
}
