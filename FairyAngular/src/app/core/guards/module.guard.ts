import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  

@Injectable({
  providedIn: 'root'
})
export class ModuleGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const token = this.authService.getToken();

    // 🚨 Si no hay token, redirigir al login
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // 🔓 Verificar permisos si la ruta los requiere
    const requiredPermissions = route.data?.['permissions'] as string[];
    if (requiredPermissions) {
      const hasAccess = requiredPermissions.every(permission => this.authService.hasPermission(permission));

      if (!hasAccess) {
        this.router.navigate(['/unauthorized']); // Redirigir si no tiene permisos
        return false;
      }
    }

    return true; // ✅ Permite la carga del módulo
  }
}
