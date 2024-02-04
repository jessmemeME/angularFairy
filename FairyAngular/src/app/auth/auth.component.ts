import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router"
 


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent{
  mostrar:string = "NO";  
  constructor(private route:Router) {
    
    route.events.subscribe((event)=>{
      if(event instanceof NavigationEnd ){
          this.mostrar=event.url=='/auth'?this.mostrar="NO":this.mostrar="SI";
      }
     }
    )    
  }
  
  mostrarHijos(path:string):void{
    this.mostrar= this.mostrar == "NO" ? "SI" : "NO";
    this.route.navigateByUrl("auth/"+path);
   }
}
