import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado/empleado';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';

@Component({
  selector: 'app-filtro-empleado',
  templateUrl: './filtro-empleado.component.html',
  styleUrls: ['./filtro-empleado.component.css']
})
export class FiltroEmpladoComponent implements OnInit {

  dataempl: any[]=[];
  EmpleadoArray: Empleado[]=[]

  constructor(
    private apiService: EmpleadoService,
    ){}
    

    ngOnInit(): void {
      this.llenarData();
   } 
   llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.dataempl=data;
      this.EmpleadoArray=data;
      console.log(this.dataempl);
      console.log(this.EmpleadoArray);
      HTMLFormControlsCollection
    })
}
}
