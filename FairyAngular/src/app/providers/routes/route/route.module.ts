import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponentComponent } from '../../provider-component/provider-component.component';
import { ListComponent } from '../../component/list/list.component';
import { CreateComponent } from '../../component/create/create.component';  
import { UpdateComponent } from '../../component/update/update.component';

const routes: Routes = [
  {
    path: '', // Ruta base del módulo de autenticación
    component: ProviderComponentComponent, // Componente principal para esta ruta
    children: [
      { path: 'update-provider', component: UpdateComponent }, // Ruta para actualizar roles
      { path: 'add-provider', component: CreateComponent }, // Ruta para agregar roles
      { path: 'list-provider', component:  ListComponent}, // Ruta para listar roles
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes) // Importa el módulo de enrutamiento con las rutas definidas
  ],
  exports: [RouterModule] // Exporta el módulo de enrutamiento para que esté disponible en el módulo de autenticación
})
export class RouteModule { }
