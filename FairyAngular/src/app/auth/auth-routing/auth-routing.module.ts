// auth-routing.module.ts - Módulo de enrutamiento para el módulo de autenticación de la aplicación Angular

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthInsertComponent } from '../auth-insert/auth-insert.component';
import { AuthListComponent } from '../auth-list/auth-list.component';
import { AuthUpdateComponent } from '../auth-update/auth-update.component';
import { AuthPermissionsComponent } from '../auth-permissions/auth-permissions.component';
import { AuthComponent } from '../auth.component';

// Definición de las rutas para el módulo de autenticación
const routes: Routes = [
  {
    path: '', // Ruta base del módulo de autenticación
    component: AuthComponent, // Componente principal para esta ruta
    children: [
      { path: 'update-rol', component: AuthUpdateComponent }, // Ruta para actualizar roles
      { path: 'add-rol', component: AuthInsertComponent }, // Ruta para agregar roles
      { path: 'list-rol', component: AuthListComponent }, // Ruta para listar roles
      { path: 'list-group-perission', component: AuthPermissionsComponent }, // Ruta para listar permisos de grupo
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)], // Importa el módulo de enrutamiento con las rutas definidas
  exports: [RouterModule] // Exporta el módulo de enrutamiento para que esté disponible en el módulo de autenticación
})
export class AuthRoutingModule { }
