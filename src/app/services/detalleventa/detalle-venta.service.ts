import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleVenta } from 'src/app/models/detalleventa/detalle-venta';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {
  api_url = "http://localhost:8080/detalleventa";
  constructor(private httpClient:HttpClient) { }



  getAll(){
    return this.httpClient.get<DetalleVenta[]>(this.api_url);
  }
}
