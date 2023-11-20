import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { VentaComponent } from './components/venta/venta.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarroComponent } from './components/carro/carro.component';
import { AgregarComponent } from './components/carro/agregar/agregar.component';
import { PdfComponent } from './components/pdf/pdf.component'
import { NgxPrintModule } from 'ngx-print';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FiltroComponent } from './components/carro/filtro/filtro.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FiltroClienteComponent } from './components/cliente/filtro-cliente/filtro-cliente.component';
import { FiltroEmpladoComponent } from './components/empleado/filtro-empleado/filtro-empleado.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentaComponent,
    ReporteComponent,
    NavbarComponent,
    CarroComponent,
    AgregarComponent,
    PdfComponent,
    ClienteComponent,
    FiltroComponent,
    EmpleadoComponent,
    FiltroClienteComponent,
    FiltroEmpladoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
