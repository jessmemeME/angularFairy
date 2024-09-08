import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// Services
import { LoginService } from './services/login.service';
import { AlertService } from '../utility/alert/alert.service';
import { GlobalCommunicationService } from '../global-communication.service';

// Models
import { Login, ReturnLogin } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrarCompPrincipal = true;
  loginForm!: FormGroup;
  returnObject: ReturnLogin = { mensaje: "", respuesta: "" };
  alertType = "";

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private alertService: AlertService,
    private communicationService: GlobalCommunicationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarCompPrincipal = event.urlAfterRedirects === '/login';
      }
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe((response: ReturnLogin) => {
        this.returnObject = response;

        if (this.returnObject.respuesta.toLocaleLowerCase() === 'code') {
          this.router.navigateByUrl('/login/validate-code', { state: this.loginForm.value });
        } else {
          this.alertType = this.returnObject.respuesta.toUpperCase() === 'ERROR' ? "error" : "success";
          this.communicationService.sendMessage(this.returnObject);
          this.toggleAlert();
        }
      });
    } else {
      this.alertType = "error";
      this.toggleAlert();
    }
  }

  toggleAlert(): void {
    this.alertService.updateAlertState(true); // Show the alert
  }
}
