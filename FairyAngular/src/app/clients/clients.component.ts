import { Component,OnInit } from '@angular/core';
import {ClientsService} from './clients.service' //llamamos a nuestro servicio de la app
import { Clients } from '../../models/clients.model'//llamamos a nuestra interface
import {Router, NavigationEnd} from "@angular/router"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  mostrar:string = "NO";  
  constructor(private route:Router) {
    route.events.subscribe((event)=>{
      if(event instanceof NavigationEnd ){
          this.mostrar=event.url=='/client'?this.mostrar="NO":this.mostrar="SI";
      }
     }
    ) 
  }
    mostrarHijos(path:string):void{
      this.mostrar= this.mostrar == "NO" ? "SI" : "NO";
      this.route.navigateByUrl("client/"+path);
     }
}
