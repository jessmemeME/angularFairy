import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  constructor(private authService: AuthService) {}

  /**
   * Obtiene los permisos desde el token almacenado.
   * @returns Arreglo de permisos del usuario
   */
  getPermissions(): string[] {
    const token = this.authService.getToken();

    if (!token) {
      return [];
    }

    try {
      // Desencriptar el token (Base64) y extraer los permisos
      const payload = JSON.parse(atob(token.split('.')[1] || ''));
      return payload?.permissions || [];
    } catch (error) {
      console.error('Error al procesar el token:', error);
      return [];
    }
  }

  /**
   * Verifica si el usuario tiene un permiso específico.
   * @param permission Permiso requerido
   * @returns `true` si el usuario tiene el permiso, `false` en caso contrario.
   */
  hasPermission(permission: string): boolean {
    return this.getPermissions().includes(permission);
  }
}
