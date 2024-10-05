// app.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FairyAngular'; // Título de la aplicación
  userIsLoged = false; // Estado de inicio de sesión del usuario

  constructor(
    private loginService: LoginService, // Servicio de autenticación
    private router: Router // Servicio de enrutamiento
  ) {}

  ngOnInit(): void {
    // Suscripción al estado de autenticación
    this.loginService.isAuthenticated$.subscribe(isAuthenticated => {
      this.userIsLoged = isAuthenticated; // Actualiza el estado de inicio de sesión
      if (this.userIsLoged) {
        this.router.navigateByUrl("dashboard"); // Navega a la lista de cuentas si el usuario está autenticado
      }
    });
  }
}
