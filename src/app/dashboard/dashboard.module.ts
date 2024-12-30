import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../core/layout/layout.module';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../core/core.module';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { CreateUsuariosComponent } from './list-usuarios/create-usuarios/create-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ListUsuariosComponent,
    CreateUsuariosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
