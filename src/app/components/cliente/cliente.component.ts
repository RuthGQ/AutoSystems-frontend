import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  datacli: any[] = [];
  nuevoCliente = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    dni: new FormControl(''),
    
  });
  clienteEditando: any = null;
  
  constructor(private apiService: ClienteService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(datacli => {
      this.datacli = datacli;
      console.log(this.datacli);
    });
  }

  guardarCliente() {
    this.apiService.agregarCliente(this.nuevoCliente.value).subscribe(
      result => {
        console.log(result);
        this.limpiarFormulario();
        this.llenarData();
      },
      error => {
        console.error('Error al agregar cliente:', error);
      }
    );
  }
  actualizarCliente() {
    if (this.clienteEditando && this.clienteEditando.idCli) {
      const clienteId = { ...this.nuevoCliente.value, idCli: this.clienteEditando.idCli };
  
      this.apiService.actualizarCliente(clienteId).subscribe(
        result => {
          console.log('Respuesta del servidor:', result);
          this.limpiarFormulario();
          this.llenarData();
          this.clienteEditando = null;
        },
      );
    } 
  }

  editarCliente(cliente: any) {
    if (cliente.idCli) {
      this.nuevoCliente.setValue({
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
        correo: cliente.correo,
        dni: cliente.dni,
      });
      this.clienteEditando = cliente;
    } 
  }

  limpiarFormulario() {
    this.nuevoCliente.reset();
    this.clienteEditando = null;
  }

  eliminar(idCli: number) {
    this.apiService.eliminarCliente(idCli).subscribe(result => {
      console.log(result);
      this.llenarData();
    });
  }

 
}
