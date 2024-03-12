<<<<<<< HEAD
//app.component.ts

//COMPOMENTE PRINCIPAL DEL PROYECTO
import { Component, OnInit } from '@angular/core';
=======
import { Component, AfterViewInit, Inject } from '@angular/core';
>>>>>>> 49f474bd6fc0ddb6f17851db01ea339cb2c94560
import { GlobalCommunicationService } from '../global-communication.service';
import { ReturnLogin } from '../../models/login';
import { Router } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { type } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'FairyAngular';
  userIsLoged = false;
  returnedLogin: ReturnLogin = {
    mensaje: "",
    respuesta: ""
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private communicationService: GlobalCommunicationService, 
    private router: Router 
  ) { 
    this.communicationService.message$.subscribe(message => {
      console.log(message,'entro');
      this.returnedLogin = message;
      if (this.returnedLogin.respuesta === 'EXITO') {
        setTimeout(() => {
          this.userIsLoged = true;
          if (typeof this.document !== 'undefined') {
            const localStorageA = this.document.defaultView?.localStorage;
            localStorageA?.setItem('userIsLoged', 'true');
          }
          this.router.navigateByUrl("account/list-account");
        }, 0);
      }
    });
  }

  ngAfterViewInit(): void {
    if (typeof this.document !== 'undefined') {
      const localStorageA = this.document.defaultView?.localStorage;
      const isLocalStorageAvailable = typeof localStorageA !== 'undefined';
      if (isLocalStorageAvailable) {
        setTimeout(() => {
          const userIsLogedFromStorage = localStorageA?.getItem('userIsLoged');
          this.userIsLoged = userIsLogedFromStorage ? JSON.parse(userIsLogedFromStorage) : false;
        }, 0);
      } 
    }
  }
}
