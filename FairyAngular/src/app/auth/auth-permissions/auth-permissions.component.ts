// auth-permissions.component.ts - Componente para la gestión de permisos de autenticación

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthGroup, AuthGroupPermissions, AuthGroupPermissionsUpdate } from '../../../models/auth-group.model';

@Component({
  selector: 'app-auth-permissions',
  templateUrl: './auth-permissions.component.html',
  styleUrls: ['./auth-permissions.component.css'] // Corrección: 'styleUrls' en lugar de 'styleUrl'
})
export class AuthPermissionsComponent implements OnInit {
  auth: AuthGroup = {}; // Variable para almacenar el grupo de autenticación
  authGroupPermision: AuthGroupPermissions[] = []; // Variable para almacenar los permisos del grupo
  allChecked: boolean = false; // Variable para controlar si todos los permisos están seleccionados

  // Constructor que inyecta el enrutador, la ruta activada y el servicio de autenticación
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private servicio: AuthService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Verifica si el objeto history está definido
    if (history !== undefined) {
      // Asigna el estado del historial a la variable 'auth'
      this.auth = history.state;
      // Llama al método para obtener la lista de permisos
      this.obtenerLista();
    } else {
      // Navega a la lista de roles si no hay estado en el historial
      this.router.navigateByUrl('auth/list-rol');
    }
  }

  // Método para obtener la lista de permisos de autenticación
  obtenerLista(): void {
    const idAuth = this.auth.id ?? 0; // Obtiene el ID del grupo de autenticación
    this.servicio.getAuthPermissions(idAuth).subscribe({
      next: (data) => {
        this.authGroupPermision = data; // Asigna los datos recibidos a la variable 'authGroupPermision'
      }
    });
  }

  // Método para guardar la lista de permisos de autenticación
  guardarLista(): void {
    // Filtra los permisos seleccionados
    const authAux = this.authGroupPermision.filter((item) => item.checqueado === true);
    const idAuth: number = this.auth.id ?? 0; // Obtiene el ID del grupo de autenticación

    if (authAux.length <= 0) {
      // Si no hay permisos seleccionados, crea un objeto con una lista vacía
      const sender: AuthGroupPermissionsUpdate = { id: idAuth, listaPermisos: '()' };
      this.actualizarLista(sender);
    } else {
      // Si hay permisos seleccionados, crea una cadena con los IDs de los permisos
      let stringAux = '(';
      authAux.forEach((item, index) => {
        stringAux += index === 0 ? item.id : `,${item.id}`;
      });
      stringAux += ')';
      const sender: AuthGroupPermissionsUpdate = { id: idAuth, listaPermisos: stringAux };
      this.actualizarLista(sender);
    }
  }

  // Método para actualizar la lista de permisos de autenticación
  actualizarLista(data: AuthGroupPermissionsUpdate): void {
    this.servicio.updateAuthPermissions(data).subscribe(
      (result: any) => {
        console.log(result, 'test');
        // Manejo de resultado exitoso (puede agregar lógica adicional aquí)
      },
      (error: unknown) => {
        if (error instanceof Error) {
          console.error('Error:', error.message); // Manejo de errores
        } else {
          console.error('Unknown error:', error);
        }
      }
    );
  }

  // Método para seleccionar o deseleccionar todos los permisos
  seleccionarTodo(): void {
    this.authGroupPermision.forEach((item) => {
      item.checqueado = !this.allChecked; // Alterna el valor de 'checqueado' para cada permiso
    });
    this.allChecked = !this.allChecked; // Alterna el valor de 'allChecked'
  }
}
