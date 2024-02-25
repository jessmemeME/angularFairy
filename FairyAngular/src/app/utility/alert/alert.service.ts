import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertStateSubject = new Subject<boolean>();
  alertState$ = this.alertStateSubject.asObservable();

  updateAlertState(newState: boolean): void {
    this.alertStateSubject.next(newState);
  }
}
