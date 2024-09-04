// auth.component.ts - Componente principal de autenticación de la aplicación Angular

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'] // Corrección: 'styleUrls' en lugar de 'styleUrl'
})
export class AuthComponent {
  mostrar: string = 'NO'; // Variable para controlar la visibilidad de los componentes hijos

  // Constructor que inyecta el enrutador
  constructor(private route: Router) {
    // Suscripción a los eventos de navegación del enrutador
    route.events.subscribe((event) => {
      // Verifica si el evento es de tipo NavigationEnd
      if (event instanceof NavigationEnd) {
        // Actualiza la variable 'mostrar' dependiendo de la URL actual
        this.mostrar = event.url === '/auth' ? 'NO' : 'SI';
      }
    });
  }

  // Método para alternar la visibilidad de los componentes hijos y navegar a una ruta específica
  mostrarHijos(path: string): void {
    // Alterna el valor de la variable 'mostrar'
    this.mostrar = this.mostrar === 'NO' ? 'SI' : 'NO';
    // Navega a la ruta especificada
    this.route.navigateByUrl('auth/' + path);
  }
}
