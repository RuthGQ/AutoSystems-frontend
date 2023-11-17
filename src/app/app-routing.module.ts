import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VentaComponent } from './components/venta/venta.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"venta",component:VentaComponent},
  {path:"reporte",component:ReporteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }