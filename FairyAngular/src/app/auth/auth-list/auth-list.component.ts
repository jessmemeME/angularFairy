// auth-list.component.ts - Componente para la lista de roles de autenticación

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGroup } from '../../../models/auth-group.model';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.css'] // Corrección: 'styleUrls' en lugar de 'styleUrl'
})
export class AuthListComponent implements OnInit {
  authGroup: AuthGroup[] = []; // Variable para almacenar la lista de grupos de autenticación

  // Constructor que inyecta el servicio de autenticación
  constructor(private servicio: AuthService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.obtenerLista(); // Llama al método para obtener la lista de grupos de autenticación
  }

  // Método para obtener la lista de grupos de autenticación
  obtenerLista(): void {
    this.servicio.getDataWithHeader().subscribe({
      next: (data) => {
        this.authGroup = data; // Asigna los datos recibidos a la variable 'authGroup'
      }
    });
  }

  // Método para eliminar un grupo de autenticación
  eliminarDatos(auth: AuthGroup): void {
    const postData = auth; // Datos del grupo de autenticación a eliminar
    this.servicio.deleteData(postData).subscribe(
      (result) => {
        this.obtenerLista(); // Actualiza la lista después de eliminar un grupo

      },
      (error) => {
        // Manejo de errores (puede agregar lógica adicional aquí)
      }
    );
  }
}
