import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresoComponent } from './invoices/pages/egreso/egreso.component';
import { IngresoComponent } from './invoices/pages/ingreso/ingreso.component';
import { NominaComponent } from './invoices/pages/nomina/nomina.component';
import { PagoComponent } from './invoices/pages/pago/pago.component';
import { TrasladoComponent } from './invoices/pages/traslado/traslado.component';
import { ListComponent } from './list-invoices/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    component: IngresoComponent
  },
  {
    path: 'egreso',
    component: EgresoComponent
  },
  {
    path: 'pago',
    component: PagoComponent
  },
  {
    path: 'nomina',
    component: NominaComponent
  },
  {
    path: 'traslado',
    component: TrasladoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
