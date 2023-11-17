import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado/empleado';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioProducto: FormGroup = this.formBuilder.group({
    user:new FormControl(''),
    password:new FormControl(''),
  })

  constructor(private authService:AuthService,private route:Router,private formBuilder:FormBuilder){

  }


  validarUsuario(){
    this.authService.obtenerEmpleado(this.formularioProducto.get("user")?.value,this.formularioProducto.get("password")?.value).subscribe({
      next:(valueObtained:Empleado) => {
        if(valueObtained!=null){
          this.route.navigate(["navbar"])
        }
      },
      error:(error: any) => {
        console.log(error)
      }
    })
  }
}
