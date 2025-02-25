import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, Router, Route, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanMatch {

  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthentication(url?: string): boolean {
    const isAuthenticated = this.authService.isAuthenticated();

    console.log('🔒 AuthGuard ejecutado. Usuario autenticado:', isAuthenticated, 'Ruta solicitada:', url);

    // ✅ Si el usuario está autenticado y quiere ir a login o landing, lo redirigimos antes de que cargue el módulo
    if (isAuthenticated && (url === 'login' || url === 'landing')) {
      this.router.navigateByUrl('/dashboard', { replaceUrl: true });
      return false;
    }

    // ✅ Si el usuario NO está autenticado y quiere acceder a rutas protegidas, lo mandamos a login
    if (!isAuthenticated && url && url !== 'login' && url !== 'landing') {
      this.router.navigateByUrl('/login', { replaceUrl: true });
      return false;
    }

    return true;
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.checkAuthentication(route.routeConfig?.path);
  }

  canMatch(route: Route): boolean {
    return this.checkAuthentication(route.path);
  }
}
