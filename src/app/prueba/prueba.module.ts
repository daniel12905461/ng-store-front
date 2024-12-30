import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { DanielComponent } from './daniel/daniel.component';


@NgModule({
  declarations: [
    DanielComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule
  ],
  exports:[
    DanielComponent
  ]
})
export class PruebaModule { }
