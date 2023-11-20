import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  api_url="http://localhost:8080/empleado"

  urlApiDelete="http://localhost:8080/empleado/eliminar/"

  urlApiPost = "http://localhost:8080/empleado/insertar" 

  urlApiPut = "http://localhost:8080/empleado/actualizar";

  constructor(private http : HttpClient) { 
    
  }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarEmpleado(nuevoEmpleado: any): Observable<any> {
    return this.http. post(this.urlApiPost, nuevoEmpleado);
  }

  public actualizarEmpleado(empleadoEditando: any): Observable<any> {
    return this.http.put(this.urlApiPut, empleadoEditando);
  }

  public  eliminarEmpleado(idEmpleado:number) {
    console.log(idEmpleado);
    return this.http.delete(this.urlApiDelete+idEmpleado)
  }

  
}
