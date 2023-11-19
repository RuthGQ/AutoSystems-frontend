import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Venta } from 'src/app/models/venta/venta';
import { VentaTransaction } from 'src/app/models/ventatransaction/venta-transaction';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  api_url = "http://localhost:8080";
  constructor(private httpClient:HttpClient) { }


  obtenerClientePorDni(dni:String){
    return this.httpClient.get<Cliente>(this.api_url+"/cliente/pordni/"+dni)
  }

  obtenerUltimaVenta(){
    return this.httpClient.get<Venta>(this.api_url + "/venta/ultima")
  }

  realizarVenta(ventaTransaction:VentaTransaction){
    return this.httpClient.post(this.api_url+"/venta/insertar",ventaTransaction);
  }
  
}
