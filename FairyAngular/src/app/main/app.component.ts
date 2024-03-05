
//COMPOMENTE PRINCIPAL DEL PROYECTO
import { Component, OnInit } from '@angular/core';
import { GlobalCommunicationService } from '../global-communication.service';
import { ReturnLogin } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FairyAngular';
  userIsLoged = false;
  returnedLogin:ReturnLogin = {
    mensaje:"",
    respuesta:""
  }

  constructor(private communicationService: GlobalCommunicationService, private router:Router ) {
    this.communicationService.message$.subscribe(message => {
      this.returnedLogin = message;
      
      if(this.returnedLogin.respuesta.toLocaleUpperCase() == 'EXITO'){
        if(this.userIsLoged!=true){
          this.userIsLoged=true;
          localStorage.setItem('userIsLoged', 'true');
          this.router.navigateByUrl("account/list-account");
        }
      }

    });
  }

  ngOnInit(): void {
    console.log(this.userIsLoged, 'userIsLoged');
    const userIsLogedFromStorage = localStorage.getItem('userIsLoged');
    this.userIsLoged = userIsLogedFromStorage ? JSON.parse(userIsLogedFromStorage) : false;
  }

}
