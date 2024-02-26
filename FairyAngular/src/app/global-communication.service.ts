import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalCommunicationService {
  private messageSubject = new Subject<any>();
  message$ = this.messageSubject.asObservable();
  sendMessage(message:any):void{
    this.messageSubject.next(message);
  }
}
