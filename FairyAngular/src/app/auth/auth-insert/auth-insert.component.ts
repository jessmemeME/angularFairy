// auth-insert.component.ts - Componente para la inserción de roles de autenticación

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGroup } from '../../../models/auth-group.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-insert',
  templateUrl: './auth-insert.component.html',
  styleUrls: ['./auth-insert.component.css'] // Corrección: 'styleUrls' en lugar de 'styleUrl'
})
export class AuthInsertComponent {
  authGroup: AuthGroup[] = []; // Variable para almacenar la lista de grupos de autenticación
  titulo: string = 'LISTA DE ROLES'; // Título del componente
  nombre: string = ''; // Variable para almacenar el nombre del nuevo rol
  id: number = 0; // Variable para almacenar el ID del nuevo rol

  // Constructor que inyecta el servicio de autenticación y el enrutador
  constructor(private servicio: AuthService, private route: Router) {}

  // Método para enviar los datos del nuevo rol al servicio de autenticación
  enviarDatos(): void {
    const postData = { id: 0, name: this.nombre }; // Datos del nuevo rol
    this.servicio.postData(postData).subscribe(
      (result) => {
        // Navega a la lista de roles después de guardar el nuevo rol
        this.route.navigateByUrl('auth/list-rol');
      },
      (error) => {
        // Manejo de errores (puede agregar lógica adicional aquí)
      }
    );
  }
}
