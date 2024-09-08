import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // FullCalendar Module
import { MatButtonModule } from '@angular/material/button';  // Angular Material
import { MatIconModule } from '@angular/material/icon';
import { AgendaRoutingModule } from './agenda-routing/agenda-routing.module';
import { EventDialogComponent } from './event-dialog/event-dialog.component';

@NgModule({
  declarations: [AgendaComponent, EventDialogComponent],
  imports: [
    CommonModule,
    FullCalendarModule,  // FullCalendarModule
    MatButtonModule,
    MatIconModule,
    AgendaRoutingModule
  ],
  exports: [AgendaComponent]
})
export class AgendaModule { }
