// app.module.ts - Módulo principal de la aplicación Angular

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from '../UI/nav-bar/nav-bar.component';
import { NotFoundComponent } from '../UI/not-found/not-found.component';
import { SideMenuComponent } from '../UI/side-menu/side-menu.component';

import { LocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, // Componente principal de la aplicación
    NavBarComponent, // Componente de la barra de navegación
    NotFoundComponent, // Componente para manejar páginas no encontradas
    SideMenuComponent, // Componente del menú lateral
  ],
  imports: [
    AppRoutingModule, // Módulo de enrutamiento de la aplicación
    BrowserModule, // Módulo para navegadores
    RouterModule, // Módulo de enrutamiento
    HttpClientModule, // Módulo HTTP para hacer solicitudes
    FormsModule, // Módulo para trabajar con formularios
  ],
  providers: [
    provideClientHydration(), // Proveedor para la hidratación del cliente
    { provide: LocationStrategy, useClass: HashLocationStrategy } // Proveedor para la estrategia de ubicación con hash
  ],
  bootstrap: [AppComponent] // Componente raíz que se debe inicializar al arrancar la aplicación
})
export class AppModule { }
