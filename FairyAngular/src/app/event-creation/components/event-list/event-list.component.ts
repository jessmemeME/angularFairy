import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

interface Event {
  id: number;
  name: string;
  clientName: string;
  event_start_date: Date;
  event_state: string;
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchControl = new FormControl('');
  displayedColumns: string[] = ['name', 'client', 'date', 'state', 'actions'];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadEvents();
    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.filterEvents(value || '');
    });
  }

  loadEvents(): void {
    this.http.get<Event[]>('/api/Event/ListAll/Event').subscribe(response => {
      this.events = response;
      this.filteredEvents = response;
    });
  }

  filterEvents(query: string): void {
    const lowerQuery = query.toLowerCase();
    this.filteredEvents = this.events.filter(event =>
      event.name.toLowerCase().includes(lowerQuery) ||
      event.clientName.toLowerCase().includes(lowerQuery) ||
      event.event_start_date.toString().includes(lowerQuery) ||
      event.event_state.toLowerCase().includes(lowerQuery)
    );
  }

  editEvent(id: number): void {
    this.router.navigate([`/events/edit/${id}`]);
  }
}
