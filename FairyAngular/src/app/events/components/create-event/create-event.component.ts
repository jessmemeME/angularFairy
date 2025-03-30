import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TimeAvailabilityModalComponent } from '../time-availability-modal/time-availability-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent implements AfterViewInit {
  @ViewChild(TimeAvailabilityModalComponent, { static: false }) timeAvailabilityModal!: TimeAvailabilityModalComponent;

  isModalOpen = false;

  constructor (private router:Router) {}

  openModal() {
    if (this.timeAvailabilityModal) {
      this.timeAvailabilityModal.openModal();
    } else {
      console.error("El modal aún no está inicializado.");
    }
  }

  ngAfterViewInit() {
    // Ahora timeAvailabilityModal está inicializado
  }
  goToBrief():void{
    console.log("Navigating to brief...");
    this.router.navigate(['events/brief']);
  }
}
