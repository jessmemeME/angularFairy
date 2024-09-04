// main.ts - Punto de entrada principal para la aplicación Angular

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Importa la plataforma para aplicaciones dinámicas en el navegador
import { AppModule } from './app/main/app.module'; // Importa el módulo principal de la aplicación

// Inicializa la plataforma y arranca el módulo principal de la aplicación
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Captura y muestra cualquier error durante el arranque
