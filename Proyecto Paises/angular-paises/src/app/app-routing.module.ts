import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';

const routes: Routes = [{path:"ciudades",component:CiudadesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
