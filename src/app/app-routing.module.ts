import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VentaComponent } from './components/venta/venta.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarroComponent } from './components/carro/carro.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FiltroComponent } from './components/carro/filtro/filtro.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FiltroClienteComponent} from './components/cliente/filtro-cliente/filtro-cliente.component'
import { FiltroEmpladoComponent } from './components/empleado/filtro-empleado/filtro-empleado.component'


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"carro", component:CarroComponent},
  {path:"venta",component:VentaComponent},
  {path:"reporte",component:ReporteComponent},
  {path:"pdf",component:PdfComponent},
  {path:"cliente", component:ClienteComponent},
  {path:"marca", component:FiltroComponent},
  {path:"empleado", component:EmpleadoComponent},
  {path:"CliNombre", component:FiltroClienteComponent},
  {path:"EmpleNombre", component:FiltroEmpladoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
