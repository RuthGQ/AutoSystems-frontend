import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/models/carro/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  api_url = "http://localhost:8080/carro"

  urlmarca = "http://localhost:8080/marca"
  
  urlApiPost ="http://localhost:8080/carro/insertar";
  
  urlApiDelete = "http://localhost:8080/carro/eliminar/";

  urlApiPut = "http://localhost:8080/carro/actualizar";

  constructor(private http: HttpClient) { 

  }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarCarro(formCarro: any): Observable<any>{
    return this.http.post(this.urlApiPost,formCarro);
  }

  public actualizarCarro(carroEditando: any): Observable<any> {
    return this.http.put(this.urlApiPut, carroEditando);
  }

  public eliminarCarro(id: number) {
    console.log(id);
    return this.http.delete(this.urlApiDelete+id);
  }

  obtenerCarroPorId(id:number){
    return this.http.get<Carro>(this.api_url+"/"+id)
  }

  filtrarPorMarca(): Observable<any[]>{
    return this.http.get<any[]>(this.urlmarca + '/list');
  }

  buscarCarro(buscarCarro: string): Observable<any> {
    return this.http.get(this.api_url+"/marca/"+buscarCarro);
  }
}