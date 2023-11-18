import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  api_url = "http://localhost:8080/venta"

  constructor(private httpClient: HttpClient) { }

  
}
