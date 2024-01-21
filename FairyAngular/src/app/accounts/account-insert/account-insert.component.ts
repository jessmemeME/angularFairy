import { Component } from '@angular/core';
import {AccountsService} from './../accounts.service';
import { Accounts } from '../../../models/accounts.model'//llamamos a nuestra interface



@Component({
  selector: 'app-account-insert',
  templateUrl: './account-insert.component.html',
  styleUrl: './account-insert.component.css'
})
export class AccountInsertComponent {
  constructor(private servicio:AccountsService){}
  account:Accounts = {};
  insertarAccount ():void{
    const postData = { id: 0, 
                      password:this.account.password,
                      last_login:this.account.last_login,
                      is_superuser:this.account.is_superuser,
                      email:this.account.email,
                      is_staff:this.account.is_staff,
                      is_active:this.account.is_active,
                      date_joined:this.account.date_joined,
                      last_updated:this.account.last_updated };
    this.servicio.postData(postData).subscribe(
      (result) => {
        //this.postDataResult = result;
        console.log(result);
      },
      (error) => {
        console.error('Error al enviar datos:', error);
      }
    );
  }

}
