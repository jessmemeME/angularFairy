import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { BasicInfoService } from '../basic-info.service';

@Component({
  selector: 'app-basic-info-componente',
  templateUrl: './basic-info-componente.component.html',
  styleUrls: ['./basic-info-componente.component.css'] // Corregido a styleUrls
})
export class BasicInfoComponenteComponent {
  mostrar_basic: boolean = false;

  constructor(private route: Router) {
    route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostrar_basic = event.url === '/settings/basic-info' ? false : true;
      }
    });
  }

  mostrarHijos(path: string): void {
    this.mostrar_basic = true;
    this.route.navigateByUrl("settings/basic-info/" + path);
  }
}
