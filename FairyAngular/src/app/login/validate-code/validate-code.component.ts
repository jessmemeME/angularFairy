import { Component } from '@angular/core';
import { LoginApiService } from '../login-api.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Code, ReturnLogin } from '../../../models/login';
import { GlobalCommunicationService } from '../../global-communication.service';

@Component({
  selector: 'app-validate-code',
  templateUrl: './validate-code.component.html',
  styleUrl: './validate-code.component.css'
})
export class ValidateCodeComponent  implements OnInit{
  constructor(
    private servicio:LoginApiService, 
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private globalCommunicationService:GlobalCommunicationService
    ){}
  login:Login = {email:"", password:""};
  accesoCorrecto:boolean = false;
  codigoActual:string="";
  codigo:string="";
  ngOnInit(){
    this.login =  history.state??history.state;
    this.obtenerCodigo();
  }
  obtenerCodigo():void{
    const postData = this.login.email;
    this.servicio.VerifyCode(postData).subscribe(
      (result) =>{
        this.codigoActual = result.auth_code;
      }
    )
  }

  validateCode():void{
    if(this.codigo == this.codigoActual){
      let respuesta:ReturnLogin = {
        respuesta:'EXITO',
        mensaje:'Ha iniciado correctamente secion'
      }
      this.globalCommunicationService.sendMessage(respuesta);
    }
  }
}
