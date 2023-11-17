import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Empleado } from 'src/app/models/empleado/empleado';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url = "http://localhost:8080/login/empleadouserclave";
  constructor(private httpClient: HttpClient) { }


  obtenerEmpleado(user:string,clave:string){
    return this.httpClient.get<Empleado>(this.api_url+"/"+user+"/"+clave)
  }

logout(): Observable<any> {
  return this.httpClient.post('https://localhost:8080/login',{});
} 
}
