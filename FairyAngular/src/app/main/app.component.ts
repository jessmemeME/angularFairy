
//COMPOMENTE PRINCIPAL DEL PROYECTO
import { Component } from '@angular/core';
import { GlobalCommunicationService } from '../global-communication.service';
import { ReturnLogin } from '../../models/login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FairyAngular';
  userIsLoged = false;
  returnedLogin:ReturnLogin = {
    mensaje:"",
    respuesta:""
  }

  constructor(private communicationService: GlobalCommunicationService) {
    this.communicationService.message$.subscribe(message => {
      this.returnedLogin = message;
      if(this.returnedLogin.respuesta.toLocaleUpperCase() != 'ERROR'){
        this.userIsLoged=true;
      }
    });
  }
}
