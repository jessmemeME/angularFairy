import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Code, ReturnLogin, email } from '../../../../models/login';

@Component({
  selector: 'app-validate-code',
  templateUrl: './validate-code.component.html',
  styleUrl: './validate-code.component.css'
})
export class ValidateCodeComponent  implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
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
    const postData:email = {email:this.login.email};
   
  }

  validateCode():void{
    console.log('entro');
    
  }

  updateVerified():void{
    
  }
}
