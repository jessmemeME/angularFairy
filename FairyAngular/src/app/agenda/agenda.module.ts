import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // FullCalendar Module
import { MatButtonModule } from '@angular/material/button';  // Angular Material
import { MatIconModule } from '@angular/material/icon';
import { AgendaRoutingModule } from './agenda-routing/agenda-routing.module';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog'; // Para los diálogos de Angular Material
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgendaComponent, 
    EventDialogComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,  // FullCalendarModule
    MatButtonModule,
    MatIconModule,
    AgendaRoutingModule,
    MatFormFieldModule,   // Asegúrate de que MatFormFieldModule esté importado
    MatInputModule,       // Asegúrate de que MatInputModule esté importado
    MatDialogModule,       // Para los diálogos de Angular Material
    ReactiveFormsModule
  ],
  exports: [AgendaComponent]
})
export class AgendaModule { }
