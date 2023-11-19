import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  datacli: any[]=[];

  nuevoCliente = new FormGroup ({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    dni: new FormControl(''),
  }
  )
  constructor(private apiService: ClienteService){}

  ngOnInit(): void {
      this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(datacli=>{
      this.datacli=datacli;
      console.log(this.datacli);
    })
  }

  guardarCliente() {
      console.log(this.nuevoCliente.value);
  }
  eliminar(idCli: number) {
    this.apiService.eliminarCliente(idCli).subscribe(result => {
      console.log(result);
      this.llenarData(); 
    });
}
}
