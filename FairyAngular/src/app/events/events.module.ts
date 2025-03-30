import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    
  
    EventsComponent, 
    CreateEventComponent, BriefComponent, CoupleCardComponent, TimeAvailabilityModalComponent, InitialMeetingComponent, PlanificationComponent, BudgetsComponent, MovementsComponent, GuestListComponent, BriefHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteModule,
  ]
})
export class EventsModule { }
