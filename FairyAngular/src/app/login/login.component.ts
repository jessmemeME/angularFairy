import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Login, ReturnLogin } from '../../models/login';
import { AlertService } from '../utility/alert/alert.service';
import { GlobalCommunicationService } from '../global-communication.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  mostrarCompPrincipal:boolean = true;
  loginObject:Login = {
    email:"",
    password:""
  }
  returnObject:ReturnLogin = {
    mensaje:"",
    respuesta:"",
  }
  alertType:string ="";
  lastSegment: string | null = null;

  constructor(private servicio:LoginService, 
    private alertService:AlertService,
    private communicationService: GlobalCommunicationService,
    private route: ActivatedRoute,
    private router: Router
    ){
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          
           if(event.urlAfterRedirects != '/login'){
              this.mostrarCompPrincipal = false;
           }else{
            this.mostrarCompPrincipal = true;
           }
        }
    });
  }

  login():void{
    this.servicio.login(this.loginObject).subscribe((response)=>{
      this.returnObject = response;
      if(this.returnObject.respuesta.toLocaleLowerCase() == 'code'){
        this.router.navigateByUrl('/login/validate-code')
      }
      this.alertType = this.returnObject.respuesta.toUpperCase() == 'ERROR'? "error":"success";
      this.communicationService.sendMessage(this.returnObject);
      this.toggleAlert()
    })
  }



  toggleAlert(): void {
    this.alertService.updateAlertState(true); // Cambia el estado de la alerta a visible
  }
}
