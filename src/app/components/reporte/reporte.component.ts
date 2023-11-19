import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro/carro';
import { DetalleVenta } from 'src/app/models/detalleventa/detalle-venta';
import { Venta } from 'src/app/models/venta/venta';
import { CarroService } from 'src/app/services/carro/carro.service';
import { DetalleVentaService } from 'src/app/services/detalleventa/detalle-venta.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {



  productos: Carro[] = []

  constructor(private detalleVentaService: DetalleVentaService, private carroService: CarroService,private router: Router) { }

  detalleVentas: DetalleVenta[] = [];
  detalleVentasConFiltro: DetalleVenta[] = [];

  ngOnInit(): void {
    this.getAllDetalleVentas();
    this.getProductos();
  }


  mySet = new Map<number,DetalleVenta>();  

  ventaReporteFiltred: Venta[] = []

  getAllDetalleVentas(){
    this.mySet = new Map<number,DetalleVenta>();  
    this.detalleVentaService.getAll().subscribe({
      next: (data : DetalleVenta[]) => {
        console.log("dasta asdkfj")
        console.log(data)
        this.detalleVentas = data;
        for(let element of data){
          this.mySet.set(element.venta.id,element)
        }
      }
    })
  }

  getTemplateReporteVenta() {
    this.mySet = new Map<number,DetalleVenta>();  

    console.log(this.detalleVentas)
    if(this.detalleVentasConFiltro.length<1){
      for(let element of this.detalleVentas){
        this.mySet.set(element.venta.id,element)
      }
    }else{
      for(let element of this.detalleVentasConFiltro){
        this.mySet.set(element.venta.id,element)
      }
    }

    sessionStorage.setItem("reporteVentasFiltred",JSON.stringify(Array.from(this.mySet)))

    this.router.navigate(["/pdf"])
  }


  
  getProductos(){
    /*this.productoService().subscribe({
      next: (data) => {
        console.log(data)
        this.productos = data
      }
    })*/
  }


  onChange(object:any){
    if(object==0){
      this.getAllDetalleVentas();
      this.getProductos();
    }else{

    }
  }

}
