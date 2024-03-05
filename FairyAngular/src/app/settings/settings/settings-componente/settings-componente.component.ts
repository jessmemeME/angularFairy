import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router"
import { SettingsService } from '../settings.service';


@Component({
  selector: 'app-settings-componente',
  templateUrl: './settings-componente.component.html',
  styleUrl: './settings-componente.component.css'
})

export class SettingsComponenteComponent {
  mostrar:string = "NO";  
  constructor(private route:Router) {
    
    route.events.subscribe((event)=>{
      if(event instanceof NavigationEnd ){
          this.mostrar=event.url=='/settings'?this.mostrar="NO":this.mostrar="SI";
      }
     }
    )    
  }
  
  mostrarHijos(path:string):void{
    this.mostrar= this.mostrar == "NO" ? "SI" : "NO";
    this.route.navigateByUrl("settings/"+path);
   }
}

