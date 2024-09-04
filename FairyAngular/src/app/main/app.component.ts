// app.component.ts - Componente principal de la aplicación Angular

import { Component, AfterViewInit, Inject } from '@angular/core';
import { GlobalCommunicationService } from '../global-communication.service';
import { ReturnLogin } from '../../models/login';
import { Router } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'FairyAngular'; // Título de la aplicación
  userIsLoged = false; // Estado de inicio de sesión del usuario
  returnedLogin: ReturnLogin = {
    mensaje: "",
    respuesta: ""
  };

  // Constructor del componente, inyecta dependencias necesarias
  constructor(
    @Inject(DOCUMENT) private document: Document, // Inyecta el documento
    private communicationService: GlobalCommunicationService, // Servicio de comunicación global
    private router: Router // Servicio de enrutamiento
  ) { 
    // Suscripción al servicio de comunicación global
    this.communicationService.message$.subscribe(message => {
      console.log(message, 'entro');
      this.returnedLogin = message; // Asigna el mensaje recibido a returnedLogin
      // Verifica si la respuesta del login es exitosa
      if (this.returnedLogin.respuesta === 'EXITO') {
        setTimeout(() => {
          this.userIsLoged = true; // Establece el estado de inicio de sesión a verdadero
          if (typeof this.document !== 'undefined') {
            const localStorageA = this.document.defaultView?.localStorage; // Accede al localStorage
            localStorageA?.setItem('userIsLoged', 'true'); // Guarda el estado de inicio de sesión en localStorage
          }
          this.router.navigateByUrl("account/list-account"); // Navega a la lista de cuentas
        }, 0);
      }
    });
  }

  // Método que se ejecuta después de que la vista ha sido inicializada
  ngAfterViewInit(): void {
    if (typeof this.document !== 'undefined') {
      const localStorageA = this.document.defaultView?.localStorage; // Accede al localStorage
      const isLocalStorageAvailable = typeof localStorageA !== 'undefined'; // Verifica la disponibilidad de localStorage
      if (isLocalStorageAvailable) {
        setTimeout(() => {
          const userIsLogedFromStorage = localStorageA?.getItem('userIsLoged'); // Obtiene el estado de inicio de sesión desde localStorage
          this.userIsLoged = userIsLogedFromStorage ? JSON.parse(userIsLogedFromStorage) : false; // Asigna el estado de inicio de sesión
        }, 0);
      } 
    }
  }
}
