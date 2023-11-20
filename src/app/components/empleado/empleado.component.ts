import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado/empleado.service';
import { TipoDto } from 'src/app/models/empleado/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent implements OnInit {
  dataempl: any[] = [];
  nuevoEmpleado = new FormGroup({
    dni: new FormControl(''),
    nom: new FormControl(''),
    ape: new FormControl(''),
    tel: new FormControl(''),
    objTipo: new FormControl(''),
    user: new FormControl(''),
    clave: new FormControl(''),
  });
  empleadoEditando: any = null;

  objTipo: TipoDto[] = [
    { idTipo: 1, descrip: "Administrador" },
    { idTipo: 2, descrip: "Vendedor" }
  ];

  constructor(private apiService: EmpleadoService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(dataempl => {
        this.dataempl = dataempl;
        console.log(this.dataempl);
      }
    );
  }

  guardarEmpleado() {
    this.apiService.agregarEmpleado(this.nuevoEmpleado.value).subscribe(
      result => {
        console.log(result);
        this.limpiarFormulario();
        this.llenarData();
      },
      error => {
        console.error('Error al agregar empleado:', error);
      }
    );
  }

  ActualizarEmpleado() {
    if (this.empleadoEditando && this.empleadoEditando.idEmpleado) {
      const empleadoId = { ...this.nuevoEmpleado.value, idEmpleado: this.empleadoEditando.idEmpleado };
  
      this.apiService.actualizarEmpleado(empleadoId).subscribe(
        result => {
          console.log('Respuesta del servidor:', result);
          this.limpiarFormulario();
          this.llenarData();
          this.empleadoEditando = null;
        },
      );
    } 
  }

  editarEmpleado(empleado: any) {
    if (empleado.idEmpleado) {
      this.nuevoEmpleado.setValue({
        dni: empleado.dni,
        nom: empleado.nom,
        ape: empleado.ape,
        tel: empleado.tel,
        objTipo: empleado.objTipo,
        user: empleado.user,
        clave: empleado.clave,
       
      });
      this.empleadoEditando = empleado;
    } 
  }

  limpiarFormulario() {
    this.nuevoEmpleado.reset();
    this.empleadoEditando = null;
  }

  
  eliminarEmpleado(idEmpleado: number) {
    this.apiService.eliminarEmpleado(idEmpleado).subscribe(result => {
      console.log(result);
      this.llenarData();
    });
  }

}
