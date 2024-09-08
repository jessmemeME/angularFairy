// app.module.server.ts - Módulo de la aplicación Angular para la plataforma del servidor

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule, // Importa el módulo principal de la aplicación
    ServerModule, // Importa el módulo del servidor de Angular
  ],
  bootstrap: [AppComponent], // Define el componente raíz que se debe inicializar al arrancar la aplicación
})
export class AppServerModule {}
