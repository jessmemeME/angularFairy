// auth-update.component.ts - Componente para la actualización de roles de autenticación

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthGroup } from '../../../models/auth-group.model';

@Component({
  selector: 'app-auth-update',
  templateUrl: './auth-update.component.html',
  styleUrls: ['./auth-update.component.css'] // Corrección: 'styleUrls' en lugar de 'styleUrl'
})
export class AuthUpdateComponent implements OnInit {
  auth: AuthGroup = {}; // Variable para almacenar el grupo de autenticación

  // Constructor que inyecta el enrutador, la ruta activada y el servicio de autenticación
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private servicio: AuthService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Verifica si el objeto history está definido
    if (history !== undefined) {
      // Asigna el estado del historial a la variable 'auth'
      this.auth = history.state ?? history.state;
      // Guarda el estado actual en sessionStorage
      sessionStorage.setItem('currentAuth', JSON.stringify(history.state));
    } else {
      // Si no hay estado en el historial, verifica sessionStorage
      const currentAuthString = sessionStorage.getItem('currentAuth');
      if (currentAuthString) {
        // Asigna el estado almacenado en sessionStorage a la variable 'auth'
        this.auth = JSON.parse(currentAuthString);
      }
    }
  }

  // Método para actualizar los datos del grupo de autenticación
  actualizarDatos(): void {
    const postData = { id: this.auth.id, name: this.auth.name };
    // Llama al servicio para actualizar los datos y suscribirse a la respuesta
    this.servicio.updateData(postData).subscribe(
      (result) => {
        // Navega a la lista de roles si la actualización es exitosa
        this.router.navigateByUrl('auth/list-rol');
      },
      (error) => {
        // Manejo de errores (puede agregar lógica adicional aquí)
      }
    );
  }
}
