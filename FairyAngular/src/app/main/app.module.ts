import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy  } from '@angular/common';

// Importa módulos personalizados
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { EventCreationModule } from '../event-creation/event-creation.module';
import { ClientesModule } from '../clientes/clientes.module';
import { AgendaModule } from '../agenda/agenda.module'; // Importar el módulo de agenda si es parte de la app principal
import { CoreModule } from '../core/core.module'
import { CookieService } from 'ngx-cookie-service';

// Componentes de UI
import { AppComponent } from './app.component';
import { NavBarComponent } from '../UI/nav-bar/nav-bar.component';
import { NotFoundComponent } from '../UI/not-found/not-found.component';
import { SideMenuComponent } from '../UI/side-menu/side-menu.component';

// Proveedor personalizado
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';

//
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomDateAdapter } from '../shared/custom-date-adapter'; 

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

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
    ClientesModule,        // Módulo de clientes
    AgendaModule,          // Módulo de Agenda
    CoreModule,            // Módulo de autenticacion
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    
  ],
  providers: [
    CookieService,
    provideClientHydration(), // Hidratación para SSR
    { provide: LocationStrategy, useClass: PathLocationStrategy  }, // Estrategia de enrutamiento con hash
    //CONFIGURACION FORMATO DE FECHA
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  bootstrap: [AppComponent]   // Componente raíz
})
export class AppModule { }
