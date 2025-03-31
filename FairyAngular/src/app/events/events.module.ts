import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { RouteModule } from './route/route/route.module';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { BriefComponent } from './components/brief/brief.component';
import { CoupleCardComponent } from './components/couple-card/couple-card.component';
import { TimeAvailabilityModalComponent } from './components/time-availability-modal/time-availability-modal.component';
import { InitialMeetingComponent } from './components/initial-meeting/initial-meeting.component';
import { PlanificationComponent } from './components/planification/planification.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { MovementsComponent } from './components/movements/movements.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { BriefHeaderComponent } from './components/brief-header/brief-header.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { GuestFormComponent } from './components/guest-form/guest-form.component';
import { TentativePlaceFormComponent } from './components/tentative-place-form/tentative-place-form.component';
import { FinanceFormComponent } from './components/finance-form/finance-form.component';
import { WantedStyleComponent } from './components/wanted-style/wanted-style.component';
import { ExpectationComponent } from './components/expectation/expectation.component';
import { DetailExpectationComponent } from './components/detail-expectation/detail-expectation.component';
import { CeremonyComponent } from './components/ceremony/ceremony.component';


@NgModule({
  declarations: [
    
  
    EventsComponent, 
    CreateEventComponent, BriefComponent, CoupleCardComponent, TimeAvailabilityModalComponent, InitialMeetingComponent, PlanificationComponent, BudgetsComponent, MovementsComponent, GuestListComponent, BriefHeaderComponent, GuestFormComponent, TentativePlaceFormComponent, FinanceFormComponent, WantedStyleComponent, ExpectationComponent, DetailExpectationComponent, CeremonyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
  ]
})
export class EventsModule { }
