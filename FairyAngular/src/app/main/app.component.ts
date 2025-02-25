import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userIsLoged = false;
  isRouting = true; // 🔥 Evita mostrar contenido antes de validar autenticación
  isAuthChecked = false; // 🔥 Bloquea render hasta que sepamos el estado
  private authCheckDelay = 1000; // 🔥 Tiempo en ms para asegurar autenticación

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // 🔄 Manejo de eventos de navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isRouting = true;
      } else if (event instanceof NavigationEnd) {
        this.isRouting = false;
      }
    });

    // 🔥 Esperamos un pequeño tiempo antes de verificar autenticación para evitar parpadeo
    setTimeout(() => {
      this.authService.authenticated$.subscribe(isAuthenticated => {
        this.userIsLoged = isAuthenticated;
        this.isAuthChecked = true; // ✅ Solo mostramos contenido cuando ya tenemos el estado

        // 🔥 Si el usuario está autenticado y está en landing/login, lo mandamos a dashboard
        const currentRoute = this.router.url;
        if (isAuthenticated && (currentRoute === '/landing' || currentRoute === '/login')) {
          this.router.navigateByUrl('/dashboard', { replaceUrl: true });
        }
      });
    }, this.authCheckDelay);
  }
}
