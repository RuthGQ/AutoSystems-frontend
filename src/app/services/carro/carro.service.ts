import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuscarCarro } from 'src/app/models/BuscarCarro';
import { Carro } from 'src/app/models/carro/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  api_url = "http://localhost:8080/carro"

  urlmarca = "http://localhost:8080/marca"
  
  urlApiPost ="http://localhost:8080/carro/insertar";

  constructor(private http: HttpClient) { }
  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }
  obtenerCarroPorId(id:number){
    return this.http.get<Carro>(this.api_url+"/"+id)
  }

  public agregarCarro(data: any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

  filtrarPorMarca(): Observable<any[]>{
    return this.http.get<any[]>(this.urlmarca + '/list');
  }

  BuscarCarro(buscarCarro: BuscarCarro): Observable<any[]> {
    return this.http.post<any[]>(this.api_url, buscarCarro);
  }
}