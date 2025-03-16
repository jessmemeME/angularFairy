import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Code, ReturnLogin, email } from '../../../../models/login';
import { LoginService }  from '../../services/login.service';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-validate-code',
  templateUrl: './validate-code.component.html',
  styleUrl: './validate-code.component.css'
})
export class ValidateCodeComponent  implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private loginService:LoginService,
    private authService:AuthService
    ){}
    
  login:Login = {email:"", password:""};
  accesoCorrecto:boolean = false;
  codigoActual:string="";
  codigo:string="";
  mostrarError:boolean = false;
  mensajeError:string = '';
  
  ngOnInit(){
    this.login =  history.state??history.state;
    this.obtenerCodigo();
  }
  
  obtenerCodigo():void{
    const postData:email = {email:this.login.email};
   
  }

  validateCode(): void {
    if (this.codigo === this.codigoActual) {
      // ✅ Código correcto, proceder con el login automático
      this.loginService.login(this.login).subscribe({
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
          this.showErrorAlert(err.error?.message || 'Error al autenticar el usuario.');
        }
      });
    } else {
      this.showErrorAlert('El código ingresado es incorrecto.');
    }
  }

  showErrorAlert(message: string): void {
    this.mostrarError = true;
    this.mensajeError = message;
  }

  closeErrorAlert(): void {
    this.mostrarError = false;
    this.mensajeError = '';
  }
}
