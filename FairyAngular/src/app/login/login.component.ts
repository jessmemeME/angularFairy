import { Component, OnDestroy } from '@angular/core';
import { LoginService } from './login.service';
import { Login, ReturnLogin } from '../../models/login';
import { AlertService } from '../utility/alert/alert.service';
import { Subscription } from 'rxjs';
import { GlobalCommunicationService } from '../global-communication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  loginObject:Login = {
    email:"",
    password:""
  }
  returnObject:ReturnLogin = {
    mensaje:"",
    respuesta:"",
  }
  alertType:string ="";
  
  constructor(private servicio:LoginService, 
    private alertService:AlertService,
    private communicationService: GlobalCommunicationService 
    ){
  }

  login():void{
    this.servicio.login(this.loginObject).subscribe((response)=>{
      this.returnObject = response;
      this.alertType = this.returnObject.respuesta.toUpperCase() == 'ERROR'? "error":"success";
      this.communicationService.sendMessage(this.returnObject);
      this.toggleAlert()
    })
  }



  toggleAlert(): void {
    this.alertService.updateAlertState(true); // Cambia el estado de la alerta a visible
  }
}
