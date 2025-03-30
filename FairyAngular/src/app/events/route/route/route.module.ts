import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from '../../components/events/events.component';
import { CreateEventComponent }  from '../../components/create-event/create-event.component';
import {BriefComponent} from '../../components/brief/brief.component';


import {InitialMeetingComponent } from '../../components/initial-meeting/initial-meeting.component';
import { PlanificationComponent } from '../../components/planification/planification.component';
import {BudgetsComponent } from '../../components/budgets/budgets.component';
import { MovementsComponent } from '../../components/movements/movements.component';
import {GuestListComponent } from '../../components/guest-list/guest-list.component';

const routes: Routes = [
  { path: '', component: EventsComponent }, // Ruta base de eventos
  { path: 'create-event', component: CreateEventComponent }, // ✅ Ruta absoluta dentro del módulo
  {
    path: 'brief',
    component: BriefComponent,
    children: [
      { path: '', redirectTo: 'initial-meeting', pathMatch: 'full' }, // Redirección por defecto
      { path: 'initial-meeting', component: InitialMeetingComponent },
      { path: 'planification', component: PlanificationComponent },
      { path: 'budgets', component: BudgetsComponent },
      { path: 'movements', component: MovementsComponent },
      { path: 'guest-list', component: GuestListComponent },
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RouteModule { }
