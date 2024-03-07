import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { BasicInfoService } from '../basic-info.service';

@Component({
  selector: 'app-basic-info-componente',
  templateUrl: './basic-info-componente.component.html',
  styleUrls: ['./basic-info-componente.component.css'] // Corregido a styleUrls
})
export class BasicInfoComponenteComponent {
  mostrar_basic: string = "NO";

  constructor(private route: Router) {
    route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostrar_basic = event.url === '/settings/basic-info' ? "NO" : "SI";
      }
    });
  }

  mostrarHijos(path: string): void {
    this.mostrar_basic = this.mostrar_basic === "NO" ? "SI" : "NO";
    this.route.navigateByUrl("settings/basic-info/" + path);
  }
}
