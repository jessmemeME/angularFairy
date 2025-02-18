import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { EventBasicDetailsComponent } from './components/event-basic-details/event-basic-details.component';
import { EventCeremoniesComponent } from './components/event-ceremonies/event-ceremonies.component';
import { EventGuestsComponent } from './components/event-guests/event-guests.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventCreationComponent,
    EventBasicDetailsComponent,
    EventCeremoniesComponent,
    EventGuestsComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    EventCreationComponent
  ]
})
export class EventCreationModule { }
