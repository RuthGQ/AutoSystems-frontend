import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { VentaComponent } from './components/venta/venta.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { MantEmpleadoComponent } from './components/mant-empleado/mant-empleado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarroComponent } from './components/carro/carro.component';
import { AgregarComponent } from './components/carro/agregar/agregar.component';
import { PdfComponent } from './components/pdf/pdf.component'
//import { NgxPrintModule } from 'ngx-print';
import { ClienteComponent } from './components/cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentaComponent,
    ReporteComponent,
    MantEmpleadoComponent,
    NavbarComponent,
    CarroComponent,
    AgregarComponent,
    PdfComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
