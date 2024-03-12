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

  constructor(private route: Router) {
    route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //this.mostrar = (event.url === '/settings/basic-info');
        this.mostrar = (event.url === '/settings/basic-info')? false : true;
      }
    });
  }

  mostrarHijos(path: string): void {
    this.mostrar = !this.mostrar;
    if (this.mostrar) {
      this.route.navigateByUrl("settings/basic-info/" + path);
    }
  }
}

/*
import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { BasicInfoService } from '../basic-info.service';

@Component({
  selector: 'app-basic-info-componente',
  templateUrl: './basic-info-componente.component.html',
  styleUrls: ['./basic-info-componente.component.css'] // Corregido a styleUrls
})
export class BasicInfoComponenteComponent {
<<<<<<< HEAD
  //mostrar: string = "NO";
  mostrar: boolean = false;
=======
  mostrar_basic: boolean = false;
>>>>>>> 49f474bd6fc0ddb6f17851db01ea339cb2c94560

  constructor(private route: Router) {
    route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
<<<<<<< HEAD
        //this.mostrar = (event.url === '/settings/basic-info') ? "NO" : "SI";
        this.mostrar = (event.url === '/settings/basic-info') ? false : true;

=======
        this.mostrar_basic = event.url === '/settings/basic-info' ? false : true;
>>>>>>> 49f474bd6fc0ddb6f17851db01ea339cb2c94560
      }
    });
  }

  mostrarHijos(path: string): void {
<<<<<<< HEAD
    //this.mostrar = (this.mostrar === "NO") ? "SI" : "NO";
    this.mostrar = !this.mostrar;
=======
    this.mostrar_basic = true;
>>>>>>> 49f474bd6fc0ddb6f17851db01ea339cb2c94560
    this.route.navigateByUrl("settings/basic-info/" + path);
  }
}
*/