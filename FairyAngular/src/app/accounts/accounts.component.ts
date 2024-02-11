import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AccountsService} from './accounts.service' //llamamos a nuestro servicio de la app
import { Accounts } from '../../models/accounts.model'//llamamos a nuestra interface
import {Router, NavigationEnd} from "@angular/router"

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})

//--------------------------------------------------------------------------------------
export class AccountsComponent {
  mostrar:string = "NO";  
  constructor(private route:Router) {
    route.events.subscribe((event)=>{
      if(event instanceof NavigationEnd ){
          this.mostrar=event.url=='/account'?this.mostrar="NO":this.mostrar="SI";
      }
     }
    ) 
  }
  

  mostrarHijos(path:string):void{
    this.mostrar= this.mostrar == "NO" ? "SI" : "NO";
    this.route.navigateByUrl("account/"+path);
   }
}
