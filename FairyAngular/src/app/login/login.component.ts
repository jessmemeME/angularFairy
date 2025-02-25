import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// Services
import { LoginService } from './services/login.service';
import { AuthService } from '../core/services/auth.service';
import { AlertService } from '../utility/alert/alert.service';

// Models
import { Login } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrarCompPrincipal = true;
  loginForm!: FormGroup;
  alertType = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeLoginForm();

    // ✅ Redirigir si el usuario ya está autenticado
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }

    // Manejo de navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarCompPrincipal = event.urlAfterRedirects === '/login';
      }
    });
  }

  // ✅ Inicializa el formulario de login
  private initializeLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // ✅ Manejo del Login
  login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (response) => { 
          if (response) {
            // ✅ Guarda el token y redirige
            this.authService.storeToken(response);
            this.router.navigateByUrl('/dashboard'); 
          } else {
            this.showErrorAlert('Error al iniciar sesión. Inténtalo de nuevo.');
          }
        },
        error: (err) => {
          console.error('Error de login:', err);
          this.showErrorAlert(err.error?.message || 'Credenciales incorrectas');
        }
      });
    } else {
      this.showErrorAlert('Por favor, completa todos los campos correctamente.');
    }
  }

  // ✅ Muestra la alerta de error con mensaje personalizado
  private showErrorAlert(message: string): void {
    this.errorMessage = message;
    this.alertType = 'error';
    this.alertService.updateAlertState(true);
  }
}
