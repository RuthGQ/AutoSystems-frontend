import { Component } from '@angular/core';
import { DetalleVenta } from 'src/app/models/detalleventa/detalle-venta';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {

  ventas: DetalleVenta[] = [];



  map = new Map<number, DetalleVenta>();
  ngOnInit() {
    this.getListReport();
  }

  total = 0;

  getListReport() {
    var elementos = sessionStorage.getItem('reporteVentasFiltred');
    if (elementos == null) {
    } else {
      this.map = new Map(JSON.parse(elementos));
      this.ventas = Array.from(this.map.values());

      for (let i of this.ventas) {
        this.total += i.venta.monto;
      }
    }


  }





}
