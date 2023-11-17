import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VentaComponent } from './components/venta/venta.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { CarroComponent } from './components/carro/carro.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarComponent } from './components/carro/agregar/agregar.component';


@NgModule({
  declarations: [
 AppComponent,
 LoginComponent,
 VentaComponent,
 ReporteComponent,
 CarroComponent,
AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
