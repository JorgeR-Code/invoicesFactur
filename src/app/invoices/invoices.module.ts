import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { EgresoComponent } from './pages/egreso/egreso.component';
import { PagoComponent } from './pages/pago/pago.component';
import { NominaComponent } from './pages/nomina/nomina.component';
import { TrasladoComponent } from './pages/traslado/traslado.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    IngresoComponent,
    EgresoComponent,
    PagoComponent,
    NominaComponent,
    TrasladoComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
    IngresoComponent,
    EgresoComponent,
    PagoComponent,
    NominaComponent,
    TrasladoComponent
  ]
})
export class InvoicesModule { }
