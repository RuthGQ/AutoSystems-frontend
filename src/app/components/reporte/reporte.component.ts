import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  productos: Carro[] = [];

  formularioFiltro: FormGroup = this.formBuilder.group({
    fechainicio: [],
    fechafinal: []
  })

  constructor(private detalleVentaService: DetalleVentaService, private formBuilder: FormBuilder, private carroService: CarroService, private router: Router) { }

  detalleVentas: DetalleVenta[] = [];
  detalleVentasConFiltro: DetalleVenta[] = [];

  ngOnInit(): void {
    this.getAllDetalleVentas();
    this.getProductos();
    this.clearFilter();
  }


  mySet = new Map<number, DetalleVenta>();

  ventaReporteFiltred: Venta[] = []

  getAllDetalleVentas() {
    this.mySet = new Map<number, DetalleVenta>();
    this.detalleVentaService.getAll().subscribe({
      next: (data: DetalleVenta[]) => {
        console.log("dasta asdkfj")
        console.log(data)
        this.detalleVentas = data;
        for (let element of data) {
          this.mySet.set(element.venta.id, element)
        }
      }
    })
  }

  getTemplateReporteVenta() {
    this.mySet = new Map<number, DetalleVenta>();

    console.log(this.detalleVentas)
    if (this.detalleVentasConFiltro.length < 1) {
      for (let element of this.detalleVentas) {
        this.mySet.set(element.venta.id, element)
      }
    } else {
      for (let element of this.detalleVentasConFiltro) {
        this.mySet.set(element.venta.id, element)
      }
    }

    sessionStorage.setItem("reporteVentasFiltred", JSON.stringify(Array.from(this.mySet)))

    this.router.navigate(["/pdf"])
  }



  getProductos() {
    /*this.productoService().subscribe({
      next: (data) => {
        console.log(data)
        this.productos = data
      }
    })*/
  }





  aplicarFiltro() {
    let valores = this.formularioFiltro.value;
    if (Number.isNaN(Date.parse(valores.fechainicio)) || Number.isNaN(Date.parse(valores.fechafinal))) {
      alert("Tiene que colocar fecha de inicio y fin para filtrar")
    } else {
      this.detalleVentaService.filterByInitialEndDate(Date.parse(valores.fechainicio), Date.parse(valores.fechafinal)).subscribe({
        next: (val: any) => {
          this.detalleVentas = val;

          sessionStorage.setItem("activeFilter", JSON.stringify(true));
        },
        error: (error) => {
          console.log(error);
        }
      });
    }

  }

  verifyFilterApply():boolean{
    let session = sessionStorage.getItem("activeFilter");
    if(session!=null){
      return JSON.parse(session);
    }
    return false;
  }

  clearFilter(){
    sessionStorage.removeItem("activeFilter");
    this.formularioFiltro.reset();
    this.getAllDetalleVentas();

  }

}
