import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { EmpleadoCreateDto,EmpleadoDto,EmpleadoUpdateDto,empleadoDeleteDto } from '../models/empleado.types';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlApi="http://localhost:8080"

  constructor(private http : HttpClient) { 
    
  }

  public getAll():Observable<any>{
    return this.http.get<EmpleadoDto>(`${this.urlApi}/empleado`)
  }

  public deleteEmpleado(id:empleadoDeleteDto):Observable<empleadoDeleteDto>{
    return this.http.delete<empleadoDeleteDto>(`${this.urlApi}/empleado/${id}`)
  }

  public createEmpleado(dto:EmpleadoCreateDto):Observable<EmpleadoCreateDto>{
    return this.http.post<EmpleadoCreateDto>(`${this.urlApi}/empleado`,dto)
  }

}