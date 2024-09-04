// global-communication.service.ts - Servicio de comunicación global para la aplicación Angular

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Proporciona el servicio en la raíz del inyector
})
export class GlobalCommunicationService {
  private messageSubject = new Subject<any>(); // Sujeto para manejar los mensajes
  message$ = this.messageSubject.asObservable(); // Observable que expone los mensajes

  // Método para enviar un mensaje a través del sujeto
  sendMessage(message: any): void {
    this.messageSubject.next(message); // Emite el mensaje a los suscriptores
  }
}
