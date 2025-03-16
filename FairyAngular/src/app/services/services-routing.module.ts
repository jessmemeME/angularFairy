import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioFormComponent } from './components/servicio-form/servicio-form.component';
import { ServicioDetallesComponent } from './components/servicio-detalles/servicio-detalles.component';

const routes: Routes = [
  { path: '', component: ServiciosComponent },
  { path: 'crear', component: ServicioFormComponent },
  { path: 'editar/:id', component: ServicioFormComponent },
  { path: 'detalles/:id', component: ServicioDetallesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
