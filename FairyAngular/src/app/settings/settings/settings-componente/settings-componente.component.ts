import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings-componente',
  templateUrl: './settings-componente.component.html',
  styleUrls: ['./settings-componente.component.css'] // Cambiado a styleUrls
})
export class SettingsComponenteComponent {
  //mostrar: string = "NO";
  mostrar: boolean = false;

  constructor(private route: Router) {
    route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //this.mostrar = event.url === '/settings' ? "NO" : "SI";
        //this.mostrar = (event.url === '/settings/basic-info')? false : true;
        this.mostrar = (event.url === '/settings')? false : true;
      }
    });
  }

  mostrarHijos(path: string): void {
    //this.mostrar = this.mostrar === "NO" ? "SI" : "NO";
    this.mostrar = !this.mostrar;
    this.route.navigateByUrl("settings/" + path);
  }
}
