// carro.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/models/carro/carro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  api_url = "http://localhost:8080/carro";
  urlApiPost = "http://localhost:8080/carro/insertar";
  urlApiDelete = "http://localhost:8080/carro/eliminar/";

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.api_url);
  }

  obtenerCarroPorId(id: number) {
    return this.http.get<Carro>(this.api_url + "/" + id);
  }

  obtenerMarcas(): Observable<any[]> {
    return this.http.get<any[]>(this.api_url).pipe(
      map(response => response.map(carro => carro.marca))     );
  }

  public agregarCarro(nuevoCarro: any): Observable<any> {
    return this.http.post(this.urlApiPost, nuevoCarro);
  }

  public eliminarCarro(id: number) {
    console.log(id);
    return this.http.delete(this.urlApiDelete+id);
  }
}