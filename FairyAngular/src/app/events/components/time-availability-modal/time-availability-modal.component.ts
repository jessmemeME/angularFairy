import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-availability-modal',
  templateUrl: './time-availability-modal.component.html',
  styleUrl: './time-availability-modal.component.css'
})
export class TimeAvailabilityModalComponent   {
  isModalOpen = false;
  constructor() {}

  ngOnInit(): void {
     
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openModal() {
    this.isModalOpen = true;
  }

}
