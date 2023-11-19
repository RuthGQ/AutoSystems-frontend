import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api_url = "http://localhost:8080/cliente" 

 urlApiDelete="http://localhost:8080/cliente/eliminar/"

 urlApiPost = "http://localhost:8080/cliente/insertar" 

 urlApiPut = "http://localhost:8080/cliente/actualizar";

  constructor(private http: HttpClient) { }
  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarCliente(nuevoCliente: any): Observable<any> {
    return this.http. post(this.urlApiPost, nuevoCliente);
  }

  public actualizarCliente(clienteEditando: any): Observable<any> {
    return this.http.put(this.urlApiPut, clienteEditando);
  }

  public  eliminarCliente(idCli:number) {
    console.log(idCli);
    return this.http.delete(this.urlApiDelete+idCli)
  }
}

