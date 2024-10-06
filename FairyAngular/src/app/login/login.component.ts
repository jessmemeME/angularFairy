import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// Services
import { LoginService } from './services/login.service';
import { AlertService } from '../utility/alert/alert.service';
import { GlobalCommunicationService } from '../global-communication.service';

// Models
import { Login, ReturnLogin } from '../../models';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrarCompPrincipal = true;
  loginForm!: FormGroup;
  alertType = '';
  returnObject!: ReturnLogin;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private alertService: AlertService,
    private communicationService: GlobalCommunicationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeLoginForm();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarCompPrincipal = event.urlAfterRedirects === '/login';
      }
    });
  }

  // Inicializa el formulario de login
  private initializeLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Método de login que interactúa con el servicio y maneja la respuesta
  login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (isAuthenticated: boolean) => { // Cambia el tipo de `response` a `isAuthenticated`
         
          if (isAuthenticated) {
            // Aquí podrías agregar lógica adicional, como navegar a otra ruta
            this.router.navigateByUrl('/dashboard'); // Cambia a la ruta deseada
          } else {
            // Manejo de errores basado en la respuesta
            this.alertType = 'error';
            this.communicationService.sendMessage({ mensaje: "Error al iniciar sesión", respuesta: "ERROR" });
            this.toggleAlert();
          }
        },
        error: () => {
          this.alertType = 'error';
          this.toggleAlert();
        }
      });
    } else {
      this.alertType = 'error';
      this.toggleAlert();
    }
  }
  

  // Maneja la respuesta de login y realiza acciones según la respuesta
  private handleLoginResponse(response: ReturnLogin): void {
    this.returnObject = response;
    if (response.respuesta.toLowerCase() === 'code') {
      // Redirecciona a la página de validación de código
      this.router.navigateByUrl('/login/validate-code', { state: this.loginForm.value });
    } else {
      this.alertType = response.respuesta.toUpperCase() === 'ERROR' ? 'error' : 'success';
      this.communicationService.sendMessage(response);
      this.toggleAlert();
    }
  }

  // Muestra la alerta de error
  private showErrorAlert(): void {
    this.alertType = 'error';
    this.toggleAlert();
  }

  // Activa la alerta a través del servicio
  private toggleAlert(): void {
    this.alertService.updateAlertState(true);
  }
}
