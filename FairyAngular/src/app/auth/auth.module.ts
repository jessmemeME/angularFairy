// auth.module.ts - Módulo de autenticación y autorización de la aplicación Angular

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

import { AuthService } from './auth.service'; // Servicio de autenticación y autorización
import { AuthListComponent } from './auth-list/auth-list.component'; // Componente de lista de autenticación
import { AuthInsertComponent } from './auth-insert/auth-insert.component'; // Componente de inserción de autenticación
import { AuthUpdateComponent } from './auth-update/auth-update.component'; // Componente de actualización de autenticación
import { AuthRoutingModule } from './auth-routing/auth-routing.module'; // Módulo de enrutamiento de autenticación
import { AuthComponent } from '../auth/auth.component'; // Componente principal de autenticación
import { AuthPermissionsComponent } from './auth-permissions/auth-permissions.component'; // Componente de permisos de autenticación

@NgModule({
  declarations: [
    AuthComponent, // Componente principal de autenticación
    AuthListComponent, // Componente de lista de autenticación
    AuthInsertComponent, // Componente de inserción de autenticación
    AuthUpdateComponent, // Componente de actualización de autenticación
    AuthPermissionsComponent // Componente de permisos de autenticación
  ],
  imports: [
    CommonModule, // Módulo común de Angular
    AuthRoutingModule, // Módulo de enrutamiento de autenticación
    FormsModule
  ],
  providers: [
    AuthService // Proveedor del servicio de autenticación y autorización
  ]
})
export class AuthModule { }
