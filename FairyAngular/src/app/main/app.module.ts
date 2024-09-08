import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Importa módulos personalizados
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { EventCreationModule } from '../event-creation/event-creation.module';
import { ClientesModule } from '../clientes/clientes.module';

// Componentes de UI
import { AppComponent } from './app.component';
import { NavBarComponent } from '../UI/nav-bar/nav-bar.component';
import { NotFoundComponent } from '../UI/not-found/not-found.component';
import { SideMenuComponent } from '../UI/side-menu/side-menu.component';

// Proveedor personalizado
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,          // Componente principal
    NavBarComponent,       // Barra de navegación
    NotFoundComponent,     // Componente para 404
    SideMenuComponent      // Menú lateral
  ],
  imports: [
    BrowserModule,         // Módulo para la compatibilidad con navegadores
    BrowserAnimationsModule, // Animaciones para Angular Material
    HttpClientModule,      // Comunicación HTTP
    FormsModule,           // Manejo de formularios
    RouterModule,          // Ruteo
    AppRoutingModule,      // Enrutamiento principal
    MaterialModule,        // Módulo Material centralizado
    EventCreationModule,   // Módulo de creación de eventos
    ClientesModule         // Módulo de clientes
  ],
  providers: [
    provideClientHydration(), // Hidratación para SSR
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // Estrategia de enrutamiento con hash
    provideAnimationsAsync(), provideCharts(withDefaultRegisterables())   // Proveedor de animaciones asíncronas
  ],
  bootstrap: [AppComponent]   // Componente raíz
})
export class AppModule { }
