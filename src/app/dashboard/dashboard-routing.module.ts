import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path:'usuarios',
        component: ListUsuariosComponent,
        // canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
