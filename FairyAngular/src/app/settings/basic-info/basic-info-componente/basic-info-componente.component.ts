import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { BasicInfoService } from '../basic-info.service';


@Component({
  selector: 'app-basic-info-componente',
  templateUrl: './basic-info-componente.component.html',
  styleUrls: ['./basic-info-componente.component.css']
})
export class BasicInfoComponenteComponent {
  mostrar: boolean = false;
  submenus: { [key: string]: boolean } = {};

  constructor(private router: Router) {}

  mostrarHijos(path: string): void {
    this.mostrar = true;
    this.router.navigate([`/settings/${path}`]);
  }

  toggleSubmenu(menu: string): void {
    this.submenus[menu] = !this.submenus[menu];
  }

  volver(): void {
    this.mostrar = false;
    this.router.navigate(['/settings']);
  }
}

