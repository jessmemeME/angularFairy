import { Component } from '@angular/core';
import { AccountsService } from '../../accounts/accounts.service';
import { Accounts } from '../../../models/accounts.model';
import { Router } from '@angular/router';
import { Login } from '../../../models/login';
import { state } from '@angular/animations';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  constructor(private servicio:AccountsService, private router:Router){}
  account:Accounts = {};
  login:Login = {email:"",password:""};


  crearNuevaCuenta():void{
     this.servicio.postData(this.account).subscribe(
      (result)=>{
        this.login.email = this.account.email?this.account.email:"";
        this.login.password = this.account.password?this.account.password:"";
        this.router.navigateByUrl("login/validate-code",{state:this.login});
     },(error)=>{

     })
  }
}
