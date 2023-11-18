import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  api_url = "http://localhost:8080/carro";

  urlApiPost ="http://localhost:8080/carro/insertar";

  constructor(private http: HttpClient) { }
  
  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarCarro(data: any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

}
