import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { AccountsService } from '../accounts.service';
import {Accounts} from '../../../models/accounts.model'

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrl: './account-update.component.css'
})
export class AccountUpdateComponent implements OnInit{
  constructor(private servicio:AccountsService,private router:Router, private activatedRoute:ActivatedRoute){}
  account:Accounts = {};

  ngOnInit(): void {
    if(history!==undefined){
      this.account = history.state;
    }else{
      this.router.navigateByUrl("account/list-account");
    }
  }

  actualizarDatos():void{
    const postData =  this.account;
    this.servicio.updateData(postData).subscribe(
      (result) => {
        this.router.navigateByUrl("account/list-account");
      },
      (error) => {
      }
    );
  }

}
