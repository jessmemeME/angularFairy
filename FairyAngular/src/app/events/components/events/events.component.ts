import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  searchValue: string = '';

  constructor(private router: Router) {} 
  
  goToCreateEvent():void{
    this.router.navigate(['events/create-event']);
  }

  goToBrief():void{
    this.router.navigate(['events/brief']);
  }

  filterList():void{}
}
