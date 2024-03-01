import { Component } from '@angular/core';
import { AccountsService } from '../../accounts/accounts.service';
import { Accounts } from '../../../models/accounts.model';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  constructor(private servicio:AccountsService, private router:Router){}
  account:Accounts = {};

  crearNuevaCuenta():void{
     this.servicio.postData(this.account).subscribe(
      (result)=>{

     },(error)=>{
      
     })
  }
}
